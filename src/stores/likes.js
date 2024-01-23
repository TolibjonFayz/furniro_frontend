import { defineStore } from "pinia";
import likes from "../api/apiLikes";

export const useLikesStore = defineStore({
  id: "likes",
  state: () => ({
    userlikeds: [],
  }),
  actions: {
    async createLike(payload) {
      try {
        let res = await likes.createLike(payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getLikesUserById(user_id) {
      try {
        let res = await likes.getLikesByUserId(user_id);
        this.userlikeds = res;
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async getLikeById(id) {
      try {
        let res = await likes.getLikeById(id);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async updateLike(id, payload) {
      try {
        let res = await likes.updateLike(id, payload);
        return res;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLike(id) {
      try {
        return await likes.deleteLikeById(id);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLikeByIds(payload) {
      try {
        return await likes.deleteLikeByUserId(payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
