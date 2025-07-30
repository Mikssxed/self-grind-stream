import { defineStore } from "pinia";
import { ref } from "vue";

export const globalStore = defineStore("global", () => {
  const sidebarOpen = ref(false);

  function toggleSidebar(open?: boolean) {
    sidebarOpen.value = open !== undefined ? open : !sidebarOpen.value;
  }

  return {
    sidebarOpen,
    toggleSidebar,
  };
});
