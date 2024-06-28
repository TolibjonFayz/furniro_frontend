<template>
  <div
    class="bg-[url('/shopimg.png')] bg-center h-[316px] flex flex-col justify-center items-center"
  >
    <img src="/logo.png" alt="Logo" />
    <h1 class="font-['Poppins'] text-[48px] font-medium">Cart</h1>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Cart</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped></style>
