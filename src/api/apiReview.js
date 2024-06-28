import axiosClient from "./apiClient";

const reviews = {
  getProductReviews(id) {
    const url = `reviews/product/${id}`;
    return axiosClient.get(url);
  },
};

export default reviews;
