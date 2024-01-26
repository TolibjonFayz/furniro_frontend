<template>
  <div id="main" class="flex flex-col items-center gap-11 pt-5 mb-24">
    <h1 v-loading="loading" class="font-['Poppins'] text-[36px] font-medium">
      Related Products
    </h1>
    <div class="flex gap-5 flex-wrap justify-center">
      <Product
        v-for="(item, index) in productStore?.cats"
        :alldata="item"
        :key="index"
      />
    </div>
    <el-button type="warning" plain style="width: 120px">Show more</el-button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Product from "../Main/Product.vue";
import { useProductStore } from "../../stores/product";

const loading = ref(false);
const productStore = useProductStore();
const props = defineProps({
  alldata: {
    type: Object,
  },
});
onMounted(async () => {
  loading.value = true;
  setTimeout(async () => {
    await productStore.getProductByCategoryId(props.alldata.category_id);
    loading.value = false;
  }, 5000);
});
</script>

<style lang="scss" scoped>
#main {
  border-top: 1px solid #d9d9d9;
}
</style>
