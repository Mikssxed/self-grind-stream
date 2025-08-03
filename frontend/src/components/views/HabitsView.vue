<script setup lang="ts">
import { useGetHabitsQuery } from "@/queries";
import CurrentWeek from "./habits/CurrentWeek.vue";
import HabitGrid from "./habits/HabitGrid.vue";

const { data: habits } = useGetHabitsQuery();
console.log(habits);
</script>

<template>
  <div class="w-full flex">
    <div class="flex flex-col gap-5 p-5 w-full lg:w-2/3">
      <CurrentWeek />
      <HabitGrid />
    </div>
    <!-- Habit info -->
    <div class="h-screen lg:w-1/3 hidden lg:flex border-l border-border"></div>
  </div>
</template>
