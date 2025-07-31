<script setup lang="ts">
import SideBar from "./SideBar.vue";
import TopBar from "./TopBar.vue";
</script>

<template>
  <SideBar />
  <TopBar />
  <div
    class="relative flex max-h-screen min-h-screen w-full flex-col bg-background pt-topbar md:pl-sidebar-mobile xl:pl-sidebar"
  >
    <slot />
  </div>
</template>
