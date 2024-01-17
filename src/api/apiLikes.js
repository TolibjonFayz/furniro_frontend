import axiosClient from "./apiClient";

const likes = {
  getLikesByUserId(id) {
    const url = `likes/user/${id}`;
    return axiosClient.get(url);
  },
  updateLike(id, payload) {
    const url = `likes/update/${id}`;
    return axiosClient.put(url, payload);
  },
  getLikeById(id) {
    const url = `likes/${id}`;
    return axiosClient.get(url);
  },
  deleteLikeById(id) {
    const url = `likes/${id}`;
    return axiosClient.delete(url);
  },
};

export default likes;
