import { completeHabit, getHabits, uncompleteHabit } from "@/api/habits";
import type { HabitWeekday } from "@/types";
import { getDayOfWeek } from "@/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import type { Ref } from "vue";

export function useGetHabitsQuery(selectedDay: Ref<HabitWeekday>) {
  return useQuery({
    queryKey: ["habits", selectedDay, getDayOfWeek()],
    queryFn: () => getHabits(selectedDay.value),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export const useToggleHabit = (
  habitId: string,
  selectedDay: Ref<HabitWeekday>,
  isCompleted: boolean = false
) => {
  const queryClient = useQueryClient();
  const queryKey = ["habits", selectedDay, getDayOfWeek()];
  return useMutation({
    mutationFn: () =>
      isCompleted ? uncompleteHabit(habitId) : completeHabit(habitId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
