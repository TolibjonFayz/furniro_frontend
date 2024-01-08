<template>
  <div id="main" class="flex flex-col items-center gap-11 pt-5 mb-24">
    <h1 class="font-['Poppins'] text-[36px] font-medium">Related Products</h1>
    <div class="flex gap-5 flex-wrap justify-center">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    <el-button type="warning" plain style="width: 120px">Show more</el-button>
  </div>
</template>

<script setup>
import Product from "../Main/Product.vue";
</script>

<style lang="scss" scoped>
#main {
  border-top: 1px solid #d9d9d9;
}
</style>
