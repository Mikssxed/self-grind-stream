<script setup lang="ts">
import UserShortInfo from "@/components/common/UserShortInfo.vue";
import LogoLink from "@/components/links/LogoLink.vue";
import { globalStore } from "@/stores";
import { Menu } from "lucide-vue-next";

const { toggleSidebar } = globalStore();
</script>

<template>
  <div
    class="md:topbar-width r-0 fixed top-0 z-10 flex h-[101px] w-full items-center justify-between border-b border-b-border bg-background p-6 md:left-sidebar"
  >
    <LogoLink v-class="'md:hidden mb-0'" />
    <UserShortInfo v-class="'hidden md:flex'" />
    <Menu
      color="white"
      class="md:hidden cursor-pointer"
      @click="toggleSidebar(true)"
    />
  </div>
</template>
