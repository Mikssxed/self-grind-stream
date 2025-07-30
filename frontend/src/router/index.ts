import AvatarView from "@/components/views/AvatarView.vue";
import DashboardView from "@/components/views/DashboardView.vue";
import GoalsView from "@/components/views/GoalsView.vue";
import HabitsView from "@/components/views/HabitsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/habits" },
  { path: "/habits", component: HabitsView },
  { path: "/dashboard", component: DashboardView },
  { path: "/goals", component: GoalsView },
  { path: "/avatar", component: AvatarView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
