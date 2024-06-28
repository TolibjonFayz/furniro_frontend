<template>
  <div
    id="main"
    class="flex bg-[#F9F1E7] justify-between pl-20 pr-20 pt-8 pb-8 items-center"
  >
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/shop' }">Shop</el-breadcrumb-item>
      <el-breadcrumb-item>{{ props.alldata.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
const props = defineProps({
  alldata: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 360px) {
  #main {
    padding-left: 30px;
  }
}
</style>
