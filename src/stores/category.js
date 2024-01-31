import { defineStore } from "pinia";
import category from "../api/apiCategory";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    all: [],
    one: [],
  }),
  actions: {
    async getAllCategory() {
      try {
        let res = await category.getAllCategory();
        this.all = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategoryById(id) {
      try {
        let res = await category.getCategoryById(id);
        this.one = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
