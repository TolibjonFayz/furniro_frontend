import { defineStore } from "pinia";
import reviews from "../api/apiReview";
import cart from "../api/apiCart";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
  actions: {
    async getUserCart(id) {
      try {
        let res = await cart.getUserCart(id);
        this.cart = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async addToCart(payload) {
      try {
        let res = await cart.addToCart(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async updateCart(id, payload) {
      try {
        let res = await cart.updateCart(payload, id);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCartByUserId(id) {
      try {
        let res = await cart.deleteCartByUserId(id);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCart(id) {
      try {
        let res = await cart.deleteCart(id);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
