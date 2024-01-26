<template>
  <Header />
  <div v-loading="loading">
    <SPWay :alldata="productStore.one" />
    <SingleProduct :alldata="productStore.one" />
    <Description :alldata="productStore.one" />
    <RelatedProducts :alldata="productStore.one" />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Main/Header.vue";
import SPWay from "../components/SingleProduct/SPWay.vue";
import SingleProduct from "../components/SingleProduct/SingleProduct.vue";
import Description from "../components/SingleProduct/Description.vue";
import RelatedProducts from "../components/SingleProduct/RelatedProducts.vue";
import Footer from "../components/Main/Footer.vue";
import { onMounted, ref } from "vue";
import { useProductStore } from "../stores/product";
const productStore = useProductStore();
const loading = ref(true);

import { useRoute } from "vue-router";
const route = useRoute();
onMounted(async () => {
  await productStore.getProductById(route.params.id);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
