<script setup lang="ts">
import { globalStore } from "@/stores";
import { computed } from "vue";
import { useRoute } from "vue-router";

const { href } = defineProps<{
  href: string;
  title: string;
  iconSrc: string;
}>();

const { toggleSidebar } = globalStore();
const route = useRoute();
const isActive = computed(() => route.path === href);

const activeClass = computed(() => {
  return isActive.value ? "bg-bg-hover" : "";
});
</script>

<template>
  <RouterLink
    :to="href"
    :class="[
      'text-primary flex items-center gap-2.5 rounded-[60px] p-6 py-4 text-lg transition-colors md:hover:bg-bg-hover',
      activeClass,
    ]"
    @click="() => toggleSidebar(false)"
  >
    <img width="24" height="24" :src="iconSrc" :alt="`${title}-icon`" />
    <span class="md:hidden xl:inline">{{ title }}</span>
  </RouterLink>
</template>
