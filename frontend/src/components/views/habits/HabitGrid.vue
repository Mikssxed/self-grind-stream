<script setup lang="ts">
import type { Habit } from "@/types";
import HabitTile from "./HabitTile.vue";

type HabitGridProps = {
  habits: Habit[];
};

defineProps<HabitGridProps>();
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <HabitTile v-for="habit in habits" :key="habit.id" :habit="habit" />
  </div>
</template>
