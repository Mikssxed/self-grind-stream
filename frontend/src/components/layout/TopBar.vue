<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import { globalStore } from "../../stores";
import LogoLink from "../common/LogoLink.vue";
import UserShortInfo from "../common/UserShortInfo.vue";

const { toggleSidebar } = globalStore();
</script>

<template>
  <div
    class="md:topbar-width r-0 fixed top-0 z-10 flex h-[101px] w-full items-center justify-between border-b border-b-border bg-background p-6 md:left-sidebar"
  >
    <LogoLink classes="md:hidden mb-0" />
    <UserShortInfo classes="hidden md:flex" />
    <Menu color="white" className="md:hidden" @click="toggleSidebar(true)" />
  </div>
</template>
