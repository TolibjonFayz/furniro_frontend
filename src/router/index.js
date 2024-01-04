import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import ShopPageVue from "../pages/ShopPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPageVue,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopPageVue,
    },
  ],
});

export default router;
