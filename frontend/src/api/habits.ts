import type { Habit, HabitWeekday } from "@/types";
import { deleteReq, get, post } from ".";

export async function getHabits(
  selectedDay: HabitWeekday,
  selectedDate: Date = new Date()
) {
  return await get<Habit[]>("/habits", {
    params: {
      selectedDay,
      selectedDate: selectedDate.toISOString(),
    },
  });
}

export async function completeHabit(habitId: string) {
  return await post(`/habits/complete/${habitId}`, {
    completedAt: new Date().toISOString(),
  });
}

export async function uncompleteHabit(habitId: string) {
  return await deleteReq(`/habits/uncomplete/${habitId}`);
}
