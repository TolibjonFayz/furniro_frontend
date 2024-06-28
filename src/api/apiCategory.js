import axiosClient from "./apiClient";

const category = {
  getAllCategory() {
    const url = `category/all`;
    return axiosClient.get(url);
  },
  getCategoryById(id) {
    const url = `category/id/${id}`;
    return axiosClient.get(url);
  },
};

export default category;
