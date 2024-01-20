import axiosClient from "./apiClient";

const products = {
  getAllProducts() {
    const url = `product/all`;
    return axiosClient.get(url);
  },
  getProductById(id) {
    const url = `product/id/${id}`;
    return axiosClient.get(url);
  },
  getProductsByCategoryId(id) {
    const url = `product/category/${id}`;
    return axiosClient.get(url);
  },
};

export default products;
