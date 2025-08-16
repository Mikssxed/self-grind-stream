<script setup lang="ts">
import { useToggleHabit } from "@/queries";
import type { Habit, HabitWeekday } from "@/types";
import { Flame, Zap } from "lucide-vue-next";
import { toRef } from "vue";
import Completion from "./Completion.vue";

const { habit, selectedDay } = defineProps<{
  habit: Habit;
  selectedDay: HabitWeekday;
}>();

const selectedDayRef = toRef(() => selectedDay);

const toggleHabit = useToggleHabit(habit.id, selectedDayRef, habit.isCompleted);

function toggleCompletion() {
  toggleHabit.mutate();
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
      :completion="habit.isCompleted ? 1 : 0"
      static
      :click="toggleCompletion"
    />
  </div>
</template>
