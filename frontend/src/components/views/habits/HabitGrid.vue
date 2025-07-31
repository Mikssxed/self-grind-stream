<script setup lang="ts">
import { habitsStore } from "@/stores";
import { computed } from "vue";
import HabitTile from "./HabitTile.vue";

const habitStore = habitsStore();

const visibleHabits = computed(() => {
  return habitStore.habits.filter((habit) => {
    const habitStartDate = new Date(habit.startDate);
    const selectedDay = new Date(habitStore.selectedDay);
    const shouldBeVisible =
      habit.repeat === "daily" ||
      habit.weekdays?.includes(
        selectedDay.toLocaleString("en-US", { weekday: "short" })
      );
    return habitStartDate <= selectedDay && shouldBeVisible;
  });
});
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <HabitTile
      v-for="(habit, index) in visibleHabits"
      :key="index"
      :habit="habit"
    />
  </div>
</template>
