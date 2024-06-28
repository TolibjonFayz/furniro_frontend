import { defineStore } from "pinia";
import reviews from "../api/apiReview";

export const useReviewsStore = defineStore({
  id: "reviews",
  state: () => ({
    productR: [],
  }),
  actions: {
    async getProductReviews(id) {
      try {
        let res = await reviews.getProductReviews(id);
        this.productR = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
