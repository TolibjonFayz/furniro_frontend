<template>
  <div id="blogs" class="flex flex-wrap justify-center mb-10 gap-10">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
  <div id="pagination" class="flex justify-center">
    <el-pagination background layout="prev, pager, next" :total="110" />
  </div>
</template>

<script setup>
import Product from "../Main/Product.vue";
</script>

<style lang="scss" scoped></style>
