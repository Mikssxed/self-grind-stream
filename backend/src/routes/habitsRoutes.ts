import express, { type Request } from "express";
import prisma from "../prismaClient";
import type { HabitWeekday } from "../types";
import { getCurrentDateRanges } from "../utils";

const router = express.Router();

type GetHabits = {
  selectedDate: string; //iso string
  selectedDay: HabitWeekday;
};

router.get("/", async (req: Request<{}, {}, {}, GetHabits>, res) => {
  const { selectedDay, selectedDate } = req.query;

  const habits = await prisma.habit.findMany({
    where: {
      OR: [
        { repeat: "DAILY" },
        { repeat: "WEEKLY", weekdays: { hasSome: [selectedDay] } },
      ],
      startDate: {
        lte: new Date(selectedDate),
      },
    },
  });

  if (!habits) {
    res.status(404).json({ error: "No habits found" });
    return;
  }

  const { startOfDay, endOfDay } = getCurrentDateRanges(new Date(selectedDate));

  const habitsWithCompletions = await Promise.all(
    habits.map(async (habit) => {
      const isCompleted = await prisma.habitCompletion.findFirst({
        where: {
          habitId: habit.id,
          completedAt: {
            gte: startOfDay,
            lt: endOfDay,
          },
        },
      });

      return {
        ...habit,
        isCompleted: !!isCompleted,
      };
    })
  );

  res.status(200).json(habitsWithCompletions);
});

router.post("/complete/:id", async (req, res) => {
  const { id } = req.params;
  const { completedAt } = req.body;

  const habitCompletion = await prisma.habitCompletion.create({
    data: {
      habitId: id,
      completedAt: new Date(completedAt),
    },
  });

  res.status(201).json(habitCompletion);
});

router.delete("/uncomplete/:id", async (req, res) => {});

export default router;
