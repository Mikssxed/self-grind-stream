import type { Habit, HabitWeekday } from "@/types";
import { get } from ".";

export async function getHabits(selectedDay: HabitWeekday) {
  return await get<Habit[]>("/habits", {
    params: {
      selectedDay,
      currentDate: new Date().toISOString(),
    },
  });
}
