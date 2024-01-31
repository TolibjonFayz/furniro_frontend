import { defineStore } from "pinia";
import products from "../api/apiProduct";

export const useProductStore = defineStore({
  id: "products",
  state: () => ({
    all: [],
    one: [],
    cats: [],
    limit: [],
    count: 0,
    c: 0,
  }),
  actions: {
    async getAllProducts(params, payload) {
      try {
        let res = await products.getAllProducts(params, payload);
        this.all = res.products;
        params.last_page = Math.ceil(res.count / params.limit);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductsByLimit(params) {
      try {
        let res = await products.getProductsByLimit(params);
        this.limit = res.products;
        this.count = res.count;
        return res;
      } catch (error) {
        console.log("error");
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
    async getProductByCategoryId(id, params) {
      try {
        let res = await products.getProductsByCategoryId(id, params);
        this.cats = res.res;
        this.c = res.count;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
