<script setup lang="ts">
import { useGetHabitsQuery } from "@/queries";
import { mapDateToWeekDay } from "@/utils";
import { computed, ref } from "vue";
import CurrentWeek from "./habits/CurrentWeek.vue";
import HabitGrid from "./habits/HabitGrid.vue";

const selectedDay = ref(mapDateToWeekDay());

const { data: habits, isSuccess } = useGetHabitsQuery(selectedDay);

const handleDayChange = (day: Date) => {
  const mappedDay = mapDateToWeekDay(day);
  selectedDay.value = mappedDay;
};

const hasHabits = computed(() => {
  return isSuccess && habits.value && habits.value.data.length > 0;
});
</script>

<template>
  <div class="w-full flex">
    <div class="flex flex-col gap-5 p-5 w-full lg:w-2/3">
      <CurrentWeek @dayChange="handleDayChange" />
      <HabitGrid
        v-if="hasHabits"
        :habits="habits!.data"
        :selectedDay="selectedDay"
      />
    </div>
    <!-- Habit info -->
    <div class="h-screen lg:w-1/3 hidden lg:flex border-l border-border"></div>
  </div>
</template>
