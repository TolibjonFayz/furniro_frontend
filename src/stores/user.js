import { defineStore } from "pinia";
import user from "../api/apiUser";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [],
  }),
  actions: {
    async signUpUser(payload) {
      try {
        let res = await user.signupUser(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async logInUser(payload) {
      try {
        let res = await user.loginUser(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async verifyOtp(payload) {
      try {
        let res = await user.verifyOtp(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async signOutUser() {
      try {
        let res = await user.signOutUser();
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser(id, payload) {
      try {
        let res = await user.updateUser(id, payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserById(id) {
      try {
        return await user.getUserById(id);
      } catch (error) {
        console.log(error);
      }
    },
    async sendMessageToUser(payload) {
      try {
        return await user.sendMessageToAdmin(payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
