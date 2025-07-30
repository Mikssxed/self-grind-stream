<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <slot name="icon" />
    <span class="text-sm text-gray-400">{{ label }}:</span>
    <span class="text-sm font-semibold text-gray-300">{{ value }}</span>
  </div>
</template>
