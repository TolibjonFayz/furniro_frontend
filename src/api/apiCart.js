import axiosClient from "./apiClient";

const cart = {
  getUserCart(id) {
    const url = `cart/user/${id}`;
    return axiosClient.get(url);
  },

  addToCart(payload) {
    const url = "cart/create";
    return axiosClient.post(url, payload);
  },

  updateCart(payload, id) {
    const url = `cart/update/${id}`;
    return axiosClient.put(url, payload);
  },

  deleteCartByUserId(id) {
    const url = `cart/delete/user/${id}`;
    return axiosClient.delete(url);
  },

  deleteCart(id) {
    const url = `cart/delete/${id}`;
    return axiosClient.delete(url);
  },
};

export default cart;
