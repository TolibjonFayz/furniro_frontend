import axiosClient from "./apiClient";

const images = {
  getImageByProductid(product_id) {
    const url = `image/product/${product_id}`;
    return axiosClient.get(url);
  },
};

export default images;
