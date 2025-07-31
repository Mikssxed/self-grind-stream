<script setup lang="ts">
import { Check } from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps<{
  completion: number;
  static?: boolean;
  click?: () => void;
}>();

const dashOffset = computed(() => {
  return 1100 - props.completion * 1100;
});
</script>

<template>
  <div class="mt-1 h-6 w-6 cursor-pointer" @click="props.click">
    <div
      class="flex items-center justify-center rounded-full bg-activity-4 p-1"
      v-if="props.completion === 1"
    >
      <Check width="100%" height="100%" />
    </div>
    <svg
      v-if="props.completion < 1"
      width="100%"
      height="100%"
      viewBox="-25 -25 400 400"
    >
      <circle
        stroke="#8a919e33"
        cx="175"
        cy="175"
        r="175"
        stroke-width="60"
        :fill="static ? '#8a919e33' : 'none'"
      ></circle>
      <circle
        stroke="#3965d3"
        transform="rotate(-90 175 175)"
        cx="175"
        cy="175"
        r="175"
        stroke-dasharray="1100"
        stroke-width="60"
        stroke-dashoffset="1100"
        stroke-linecap="round"
        fill="none"
        :style="{
          strokeDashoffset: dashOffset,
          transition: 'stroke-dashoffset 1s ease-out',
        }"
      ></circle>
    </svg>
  </div>
</template>
