import axiosClient from "./apiClient";

const products = {
  getAllProducts(params, payload) {
    const url = `product/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.post(url, payload);
  },
  getProductsByLimit(params) {
    const url = `product/all/limit/q?limit=${params.limit}`;
    return axiosClient.get(url);
  },
  getProductById(id) {
    const url = `product/id/${id}`;
    return axiosClient.get(url);
  },
  getProductsByCategoryId(id, params) {
    const url = `product/category/${id}/q?limit=${params.limit}`;
    return axiosClient.get(url);
  },
};

export default products;
