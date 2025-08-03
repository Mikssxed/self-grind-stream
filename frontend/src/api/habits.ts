import type { Habit } from "@/types";
import { get } from ".";

export async function getHabits() {
  return await get<Habit[]>("/habits");
}
