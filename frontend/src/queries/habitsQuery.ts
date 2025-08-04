import { getHabits } from "@/api/habits";
import type { HabitWeekday } from "@/types";
import { useQuery } from "@tanstack/vue-query";
import { getDay } from "date-fns";
import type { Ref } from "vue";

export function useGetHabitsQuery(selectedDay: Ref<HabitWeekday>) {
  const currentDay = getDay(new Date());
  return useQuery({
    queryKey: ["habits", selectedDay, currentDay],
    queryFn: () => getHabits(selectedDay.value),
  });
}
