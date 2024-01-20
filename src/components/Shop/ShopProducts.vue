<template>
  <div id="blogs" class="flex flex-wrap justify-center mt-12 mb-10 gap-10">
    <Product
      v-for="(item, index) in productStore.all"
      :alldata="item"
      :key="index"
    />
  </div>
  <div id="pagination" class="flex justify-center mb-16">
    <el-pagination background layout="prev, pager, next" :total="60" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Product from "../Main/Product.vue";
import { useProductStore } from "../../stores/product";

const productStore = useProductStore();

onMounted(async () => {
  await productStore.getAllProducts();
});
</script>

<style lang="scss" scoped></style>
