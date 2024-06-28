<template>
  <h1 class="font-['Poppins'] text-[25px] text-center font-medium mb-10">
    Wishes
  </h1>
  <div
    v-loading="loading"
    class="flex ml-10 mr-10 flex-wrap gap-5 justify-center"
  >
    <el-empty
      class="font-['Poppins']"
      v-if="likesStore.userlikeds.length == 0"
      description="You have no favorite products"
    />
    <LikeProduct
      v-if="likesStore.userlikeds.length > 0"
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

const loading = ref(false);
const likes = ref();
const likesStore = useLikesStore();

onMounted(async () => {
  const userid = localStorage.getItem("userid");
  loading.value = true;
  likes.value = await likesStore.getLikesUserById(userid);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
