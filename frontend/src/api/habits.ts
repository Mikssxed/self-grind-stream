import type { Habit, HabitWeekday } from "@/types";
import { deleteReq, get, post } from ".";

export async function getHabits(selectedDay: HabitWeekday) {
  return await get<Habit[]>("/habits", {
    params: {
      selectedDay,
      currentDate: new Date().toISOString(),
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
