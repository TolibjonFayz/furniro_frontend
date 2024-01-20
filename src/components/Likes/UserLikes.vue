<template>
  <h1 class="font-['Poppins'] text-[25px] text-center font-medium mb-10">
    Istaklarim
  </h1>
  <div class="flex ml-10 mr-10 flex-wrap gap-5 justify-center">
    <LikeProduct
      v-for="(item, index) in likesStore.userlikeds"
      :alldata="item"
      :key="index"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useLikesStore } from "../../stores/likes.js";
import LikeProduct from "../Main/LikeProduct.vue";
const likes = ref();
const likesStore = useLikesStore();

onMounted(async () => {
  const userid = localStorage.getItem("userid");
  likes.value = await likesStore.getLikesUserById(userid);
});
</script>

<style lang="scss" scoped></style>
