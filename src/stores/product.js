import { defineStore } from "pinia";
import products from "../api/apiProduct";

export const useProductStore = defineStore({
  id: "products",
  state: () => ({
    all: [],
    one: [],
    cats: [],
  }),
  actions: {
    async getAllProducts() {
      try {
        let res = await products.getAllProducts();
        this.all = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductById(id) {
      try {
        let res = await products.getProductById(id);
        this.one = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductByCategoryId(id) {
      try {
        let res = await products.getProductsByCategoryId(id);
        this.cats = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
