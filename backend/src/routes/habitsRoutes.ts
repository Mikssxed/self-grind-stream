import express from "express";
import prisma from "../prismaClient";

const router = express.Router();

router.get("/", async (req, res) => {
  const habits = await prisma.habit.findMany();

  if (!habits) {
    res.status(404).json({ error: "No habits found" });
    return;
  }

  res.status(200).json(habits);
});

router.post("/", async (req, res) => {});

export default router;
