<script setup lang="ts">
import { habitsStore } from "@/stores";
import type { Habit } from "@/types";
import { isSameDay } from "date-fns";
import { Flame, Zap } from "lucide-vue-next";
import { computed } from "vue";
import Completion from "./Completion.vue";

const { habit } = defineProps<{ habit: Habit }>();
const habitStore = habitsStore();

const isCompleted = computed(() => {
  return habit.completedAt?.some((date) => {
    const habitDate = new Date(date);
    const selectedDay = new Date(habitStore.selectedDay);
    return habitDate.toDateString() === selectedDay.toDateString();
  });
});

function toggleCompletion() {
  const selectedDay = new Date(habitStore.selectedDay);

  const habitIndex = habitStore.habits.findIndex(
    (h) => h.title === habit.title
  );

  const alreadyCompleted = habit.completedAt?.some((date) => {
    const habitDate = new Date(date);
    return habitDate.toDateString() === selectedDay.toDateString();
  });

  const newCompletedAt = alreadyCompleted
    ? habit.completedAt?.filter((date) => {
        const currentDate = new Date(date);
        return !isSameDay(currentDate, selectedDay);
      })
    : [...(habit.completedAt || []), selectedDay];

  habitStore.updateHabit(habitIndex, { ...habit, completedAt: newCompletedAt });
}
</script>

<template>
  <div
    class="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-border p-4"
  >
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-semibold">{{ habit.title }}</h3>
      <div class="flex gap-3">
        <div class="flex items-center gap-1">
          <Flame color="orange" />
          <span class="text-sm text-gray-200">
            {{ habit.streakCount }}
            {{ habit.streakCount === 1 ? "day" : "days" }}
          </span>
        </div>
        <div class="flex items-center gap-1">
          <Zap color="#3965d3" />
          <span class="text-sm text-gray-200">
            {{ habit.totalCount }} {{ habit.totalCount === 1 ? "day" : "days" }}
          </span>
        </div>
      </div>
    </div>
    <Completion
      :completion="isCompleted ? 1 : 0"
      static
      :click="toggleCompletion"
    />
  </div>
</template>
