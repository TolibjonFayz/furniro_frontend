<template>
  <div id="main" class="flex justify-between items-center mt-[-120px] mb-20">
    <div id="left" class="w-[65%] flex items-center flex-col mt-16">
      <div
        id="l-top"
        class="w-[100%] flex justify-start gap-20 bg-[#F9F1E7] p-8 ml-40 pl-40"
      >
        <h1 class="font-['Poppins'] text-[16px] font-medium mr-10">Product</h1>
        <h1 class="font-['Poppins'] text-[16px] font-medium">Price</h1>
        <h1 class="font-['Poppins'] text-[16px] font-medium mr-6">Quantity</h1>
        <h1 class="font-['Poppins'] text-[16px] font-medium">Subtotal</h1>
      </div>
      <div id="l-products">
        <div id="product" class="flex items-center gap-20">
          <div class="flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.S2JcicHVkjksblfWyzUtaQHaEK?rs=1&pid=ImgDetMain"
              alt="img"
              class="w-[111px]"
            />
            <h1 class="w-[50%]">Asgard sofa</h1>
          </div>
          <h2>2,000 $</h2>
          <el-input-number
            class="ml-[-20px]"
            :min="1"
            v-model="quantity"
            size="small"
          />
          <h3>2,500 $</h3>
          <i class="fa-solid fa-trash text-[#B88E2F] cursor-pointer"></i>
        </div>
      </div>
    </div>

    <div
      id="right"
      class="w-[25%] flex flex-col bg-[#F9F1E7] mr-10 items-center gap-10 pt-10 pb-10 mt-40"
    >
      <h1 class="font-['Poppins'] text-[32px] font-semibold">Cart Totals</h1>
      <div class="flex gap-20">
        <h1 class="font-['Poppins'] text-[16px] font-medium">Total</h1>
        <h2 class="font-['Poppins'] text-[16px] font-medium text-[#B88E2F]">
          2,000 $
        </h2>
      </div>
      <el-button
        type="warning"
        style="padding: 30px 50px; font-size: 20px; color: #000"
        plain
        >Check out</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const quantity = ref(1);
</script>

<style lang="scss" scoped></style>
