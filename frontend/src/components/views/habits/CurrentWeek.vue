<script setup lang="ts">
import { daysInWeek } from "@/constants";
import { computed } from "vue";
import Weekday from "./Weekday.vue";

const currentDate = new Date();

const emits = defineEmits<{ dayChange: [Date] }>();

const weekDays = computed<Date[]>(() => {
  return Array.from({ length: daysInWeek }).map((_, i) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - daysInWeek + i + 1); // i starts from 0, so we add 1 to align with the week
    return date;
  });
});

const handleDayClick = (day: Date) => {
  emits("dayChange", day);
};
</script>

<template>
  <div class="flex w-full justify-between overflow-x-auto max-w-screen gap-2">
    <Weekday
      v-for="(day, index) in weekDays"
      :key="index"
      :day="day"
      @click="handleDayClick(day)"
    />
  </div>
</template>
