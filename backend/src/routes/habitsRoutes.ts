import express from "express";
import prisma from "../prismaClient";

const router = express.Router();

router.get("/", async (req, res) => {
  const habits = await prisma.habit.findMany();

  if (!habits) {
    res.status(404).json({ error: "No habits found" });
    return;
  }

  const habitsWithCompletions = await Promise.all(
    habits.map(async (habit) => {
      const isCompleted = await prisma.habitCompletion.findFirst({
        where: {
          habitId: habit.id,
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
