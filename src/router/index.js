import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import ShopPageVue from "../pages/ShopPage.vue";
import SingleProductVue from "../pages/SingleProduct.vue";
import ComparisonPageVue from "../pages/ComparisonPage.vue";
import CartPageVue from "../pages/CartPage.vue";
import CheckoutPageVue from "../pages/CheckoutPage.vue";
import ContactPageVue from "../pages/ContactPage.vue";
import AboutPageVue from "../pages/AboutPage.vue";
import i404PageVue from "../pages/i404Page.vue";
import UserPageVue from "../pages/UserPage.vue";
import LikesPageVue from "../pages/LikesPage.vue";

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
    {
      path: "/product/:id",
      name: "product",
      component: SingleProductVue,
    },
    {
      path: "/comparison/:id",
      name: "comparison",
      component: ComparisonPageVue,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPageVue,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutPageVue,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPageVue,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPageVue,
    },
    {
      path: "/user",
      name: "user",
      component: UserPageVue,
    },
    {
      path: "/likes",
      name: "likes",
      component: LikesPageVue,
    },
    { path: "/:catchAll(.*)*", component: i404PageVue },
  ],
});

export default router;
