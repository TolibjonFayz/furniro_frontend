<template>
  <div
    id="main"
    class="flex flex-col justify-center items-center mt-14 ml-12 mr-12"
  >
    <h1
      class="mb-8 font-['Poppins'] text-[40px] font-bold text-[#3A3A3A] text-center"
    >
      Our products
    </h1>
    <div
      v-loading="loading"
      id="blogs"
      class="flex flex-wrap justify-center mb-12 gap-10"
    >
      <Product
        v-for="(item, index) in productStore.all"
        :alldata="item"
        :key="index"
      />
    </div>
    <el-button
      type="warning"
      plain
      style="padding: 15px 50px; border-radius: 2px"
      >Show more</el-button
    >
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Product from "./Product.vue";
import { useProductStore } from "../../stores/product";

const loading = ref(false);
const productStore = useProductStore();

onMounted(async () => {
  loading.value = true;
  await productStore.getAllProducts();
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
