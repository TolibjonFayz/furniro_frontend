<template>
  <div id="main" class="flex ml-20 mt-10 gap-16 float-start">
    <!-- First -->
    <div id="one">
      <div id="head">
        <h1 class="font-['Poppins'] text-[28px] font-medium w-[223px]">
          Go to Product page for more Products
        </h1>
        <a
          href="/shop"
          class="font-['Poppins'] text-[20px] font-medium text-[#727272] inline cursor-pointer"
          style="border-bottom: 1px solid #727272"
        >
          View more
        </a>
      </div>

      <div id="body" class="flex flex-col gap-20 mt-40">
        <!-- Body first -->
        <div id="body-first" class="flex flex-col gap-8">
          <h1 class="font-['Poppins'] text-[28px] font-medium">General</h1>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Sales Package
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Model Number</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Secondary Material
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Configuration
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Upholstery Material
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Upholstery Color
          </h2>
        </div>

        <!-- Body second -->
        <div id="body-second" class="flex flex-col gap-8">
          <h1 class="font-['Poppins'] text-[28px] font-medium">Product</h1>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Filling Material
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Finish Type</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Adjustable Headrest
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Maximum Load Capacity
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Origin of Manufacture
          </h2>
        </div>

        <!-- Body third -->
        <div id="body-third" class="flex flex-col gap-8">
          <h1 class="font-['Poppins'] text-[28px] font-medium">Dimensions</h1>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Width</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Height</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Depth</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Weight</h2>
        </div>

        <!-- Body fourth -->
        <div id="body-fourth" class="flex flex-col gap-8">
          <h1 class="font-['Poppins'] text-[28px] font-medium">Warranty</h1>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Warranty Summary
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Warranty Service Type
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal mt-[90px]">
            Domestic Warranty
          </h2>
        </div>
      </div>
    </div>

    <!-- Second -->
    <div id="second" class="w-[22%]">
      <!-- Head -->
      <div id="head">
        <img
          src="https://havenly.com/blog/wp-content/uploads/2020/07/contemporary-bedroom-3-1710x970.jpeg"
          alt="Product img"
          class="w-[280px]"
        />
        <h1>Asgard sofa</h1>
        <h2>2,000 $</h2>
        <div class="flex items-center">
          <el-rate v-model="value" allow-half disabled class="pr-3" />
          <h1
            id="rate"
            class="pl-5 text-[13px] font-['Poppins'] text-[#9F9F9F]"
          >
            5 reviews
          </h1>
        </div>
      </div>

      <!-- Body -->
      <div id="body" class="flex flex-col gap-36 mt-40">
        <!-- Body first -->
        <div id="body-first" class="flex flex-col gap-8 mt-[-10px]">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            1 sectional sofa
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            TFCBLIGRBL6SRHS
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">Solid Wood</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">L-shaped</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Fabric + Cotton
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Bright Grey & Lion
          </h2>
        </div>

        <!-- Body second -->
        <div id="body-second" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">Foam</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Bright Grey & Lion
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">No</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">280 KG</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">India</h2>
        </div>

        <!-- Body third -->
        <div id="body-third" class="flex flex-col gap-8 mt-2">
          <h2 class="font-['Poppins'] text-[20px] font-normal">265.32 cm</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">76 cm</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">167.76 cm</h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">45 KG</h2>
        </div>

        <!-- Body fourth -->
        <div id="body-fourth" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            1 Year Manufacturing Warranty
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            For Warranty Claims or Any Product Related Issues Please Email at
            operations@trevifurniture.com
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">1 Year</h2>
        </div>
      </div>
    </div>

    <!-- Add product -->
    <div>
      <h1>Add a product</h1>
      <el-select v-model="value1" filterable placeholder="Choose a product">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref(4.5);

const value1 = ref<string[]>([]);
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<style lang="scss" scoped>
#rate {
  border-left: 1px solid #9f9f9f;
}
</style>
