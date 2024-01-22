import { defineStore } from "pinia";
import images from "../api/apiImage";

export const useImageStore = defineStore({
  id: "image",
  state: () => ({
    image: [],
  }),
  actions: {
    async getImageByProductId(product_id) {
      try {
        let res = await images.getImageByProductid(product_id);
        this.iamge = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
