<script setup lang="ts">
import logo from "@/assets/logo.svg";
import { globalStore } from "@/stores";

const { toggleSidebar } = globalStore();
</script>

<template>
  <RouterLink
    class="mb-8 flex items-center gap-2.5 p-2 md:justify-center xl:justify-start"
    to="/dashboard"
    @onClick="() => toggleSidebar(false)"
    v-bind="$attrs"
  >
    <img :src="logo" alt="logo" width="36" height="36" />
    <h1 class="text-2xl text-text-primary font-bold md:hidden xl:inline">
      SelfGrind
    </h1>
  </RouterLink>
</template>
