<template>
  <!-- Filter -->
  <div
    id="main"
    class="flex bg-[#F9F1E7] justify-between pl-14 pr-20 pt-8 pb-8 items-center"
  >
    <div id="first" class="flex items-center gap-5">
      <i class="fa-solid fa-sliders cursor-pointer"></i>
      <h1 class="font-['Poppins'] text-[16px] font-normal">Filter</h1>
    </div>

    <div id="second" class="flex items-center gap-5">
      <div class="flex items-center gap-5">
        <h1 class="font-['Poppins'] text-[16px] font-normal">Search</h1>
        <el-input
          v-model="payload.search"
          placeholder="Asgard sofa"
          style="width: 200px"
        />
      </div>
      <div class="flex items-center gap-5">
        <h1 class="font-['Poppins'] text-[16px] font-normal">Category</h1>
        <el-select
          style="width: 200px"
          v-model="payload.category"
          placeholder="Select"
        >
          <el-option
            v-for="item in categoryStore.all"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            :disabled="item.disabled"
          />
        </el-select>
      </div>
    </div>

    <div id="third" class="flex items-center gap-5">
      <div class="flex items-center gap-5">
        <h1 class="font-['Poppins'] text-[16px] font-normal">Sort by</h1>
        <el-select
          style="width: 200px"
          v-model="payload.by"
          placeholder="Select"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <el-button @click="search()" type="primary" :icon="Search"
        >Search</el-button
      >
    </div>
  </div>

  <!-- Products -->
  <div
    v-loading="loading"
    id="blogs"
    class="flex flex-wrap justify-center mt-12 mb-10 gap-10"
  >
    <el-empty
      v-if="productStore.all.length < 1"
      description="We couldn't find what you're looking for"
    />
    <Product
      v-if="productStore.all"
      v-for="(item, index) in productStore.all"
      :alldata="item"
      :key="index"
    />
  </div>
  <div id="pagination" class="flex justify-center mb-16">
    <VPagination
      v-if="productStore.all.length > 0"
      v-model="params.page"
      :pages="params.last_page"
      :range-size="1"
      active-color="#EAF5FF"
      @update:modelValue="paginationbnt()"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import Product from "../Main/Product.vue";
import { useProductStore } from "../../stores/product";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { useCategoryStore } from "../../stores/category";
import { Search } from "@element-plus/icons-vue";

const loading = ref(false);
const productStore = useProductStore();
const params = {
  page: 1,
  limit: 12,
  last_page: null,
};

const payload = reactive({
  search: String(),
  category: String(),
  by: String(),
});

const categoryStore = useCategoryStore();
const options = [
  {
    value: 1,
    label: "Cheaper first",
  },
  {
    value: 2,
    label: "Expensive first",
  },
  {
    value: 3,
    label: "A ... Z",
  },
  {
    value: 4,
    label: "Z ... A",
  },
];

const search = async () => {
  params.page = 1;
  loading.value = true;
  await productStore.getAllProducts(params, payload);
  loading.value = false;
};

const paginationbnt = async () => {
  loading.value = true;
  await productStore.getAllProducts(params, payload);
  loading.value = false;
};

onMounted(async () => {
  loading.value = true;
  await categoryStore.getAllCategory();
  await productStore.getAllProducts(params, payload);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  #main {
    flex-direction: column;
    gap: 20px;
  }
}

@media screen and (max-width: 660px) {
  #second {
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  #third {
    flex-direction: column;
  }
}
</style>
