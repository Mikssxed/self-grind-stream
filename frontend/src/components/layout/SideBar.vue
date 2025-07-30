<script setup lang="ts">
import calendar from "@/assets/calendar.svg";
import goal from "@/assets/goal.svg";
import house from "@/assets/house.svg";
import user from "@/assets/user.svg";
import UserShortInfo from "@/components/common/UserShortInfo.vue";
import LogoLink from "@/components/links/LogoLink.vue";
import SidebarLink from "@/components/links/SidebarLink.vue";
import { globalStore } from "@/stores";
import { storeToRefs } from "pinia";

const store = globalStore();
const { sidebarOpen } = storeToRefs(store);
const { toggleSidebar } = store;
</script>

<template>
  <div
    :class="[
      'fixed top-0 left-0 z-10 h-screen w-screen bg-black/50 md:relative',
      sidebarOpen ? 'flex' : 'hidden',
      'md:hidden',
    ]"
    @click="() => toggleSidebar(false)"
  />
  <div
    :class="[
      'fixed top-0 right-0 z-20 flex h-dvh w-64 flex-col border-l border-border bg-background p-4 transition-transform md:right-auto md:left-0 md:border-r md:border-l-0',
      sidebarOpen ? 'translate-x-0' : 'translate-x-full',
      'md:translate-x-0',
    ]"
  >
    <LogoLink class="hidden md:flex" />
    <UserShortInfo mobile />
    <ul class="flex flex-col gap-2">
      <SidebarLink href="/dashboard" :iconSrc="house" title="Dashboard" />
      <SidebarLink href="/goals" :iconSrc="goal" title="Goals" />
      <SidebarLink href="/habits" :iconSrc="calendar" title="Habits" />
      <SidebarLink href="/avatar" :iconSrc="user" title="Avatar" />
    </ul>
  </div>
</template>
