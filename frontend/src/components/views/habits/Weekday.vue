<script setup lang="ts">
import { habitsStore } from "@/stores";
import { cn } from "@/utils";
import { computed } from "vue";
import Completion from "./Completion.vue";

const emits = defineEmits(["click"]);

const { day } = defineProps<{ day: Date }>();
const habits = habitsStore();
const dayName = day.toLocaleDateString("en-US", { weekday: "short" });
const dayNumber = day.getDate();
const isCurrentDay = computed(
  () => day.toDateString() === habits.selectedDay.toDateString()
);

const dayCompletion = computed(() => {
  const completion = habits.getDayCompletion(day);
  return completion || 0;
});

function selectDay() {
  habits.setSelectedDay(day);
  emits("click");
}
</script>

<template>
  <button
    :class="
      cn(
        'flex min-w-16 cursor-pointer flex-col items-center justify-center rounded-2xl border border-border px-4 py-3 transition-all hover:bg-activity-0/50',
        { 'bg-activity-0': isCurrentDay }
      )
    "
    @click="selectDay"
  >
    <p
      :class="
        cn('text-xs font-light text-gray-100', {
          'text-activity-4': isCurrentDay,
        })
      "
    >
      {{ dayName }}
    </p>
    <p
      :class="cn('text-sm font-semibold', { 'text-activity-4': isCurrentDay })"
    >
      {{ dayNumber }}
    </p>
    <Completion :completion="dayCompletion" />
  </button>
</template>
