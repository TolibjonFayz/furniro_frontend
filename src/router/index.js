import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPageVue,
    },
  ],
});

export default router;
