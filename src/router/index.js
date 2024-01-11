import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import ShopPageVue from "../pages/ShopPage.vue";
import SingleProductVue from "../pages/SingleProduct.vue";
import ComparisonPageVue from "../pages/ComparisonPage.vue";
import CartPageVue from "../pages/CartPage.vue";
import CheckoutPageVue from "../pages/CheckoutPage.vue";
import ContactPageVue from "../pages/ContactPage.vue";

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
      path: "/comparision",
      name: "comparision",
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
  ],
});

export default router;
