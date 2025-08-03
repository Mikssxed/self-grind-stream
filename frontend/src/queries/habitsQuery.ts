import { getHabits } from "@/api/habits";
import { useQuery } from "@tanstack/vue-query";

export function useGetHabitsQuery() {
  return useQuery({
    queryKey: ["habits"],
    queryFn: getHabits,
  });
}
