import axiosClient from "./apiClient";

const user = {
  signupUser(payload) {
    const url = "user/signup";
    return axiosClient.post(url, payload);
  },
  loginUser(payload) {
    const url = "user/signin";
    return axiosClient.post(url, payload);
  },
  verifyOtp(payload) {
    const url = "user/verify-otp";
    return axiosClient.post(url, payload);
  },
  signOutUser() {
    const url = "user/signout";
    return axiosClient.post(url);
  },
  updateUser(id, payload) {
    const url = `user/update/${id}`;
    return axiosClient.put(url, payload);
  },
  getUserById(id) {
    const url = `user/${id}`;
    return axiosClient.get(url);
  },
  sendMessageToAdmin(payload) {
    const url = `user/message`;
    return axiosClient.post(url, payload);
  },
};

export default user;
