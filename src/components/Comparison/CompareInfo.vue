<template>
  <div id="main" class="flex ml-20 mt-10 gap-16 float-start mb-28">
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
          <h2 class="font-['Poppins'] text-[20px] font-normal mt-[-10px]">
            Warranty Summary
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Warranty Service Type
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            Domestic Warranty
          </h2>
        </div>
      </div>
    </div>

    <!-- Second -->
    <div id="second" class="w-[22%]">
      <!-- Head -->
      <div id="head" v-loading="loading1">
        <img
          :src="product1?.image[0]?.img_url"
          alt="Product img"
          class="w-[280px] h-[150px]"
        />
        <h1>{{ product1?.name }}</h1>
        <h2>{{ formatNumber(product1?.price) }}$</h2>
        <div class="flex items-center">
          <el-rate v-model="value" allow-half disabled class="pr-3" />
          <h1
            id="rate"
            class="pl-5 text-[13px] font-['Poppins'] text-[#9F9F9F]"
          >
            {{ product1?.reviews?.length }} reviews
          </h1>
        </div>
      </div>

      <!-- Body -->
      <div
        v-for="(item, index) in product1?.additionalInformation"
        :key="index"
        id="body"
        class="flex flex-col gap-36 mt-40"
      >
        <!-- Body first -->
        <div id="body-first" class="flex flex-col gap-8 mt-[-10px]">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.sales_package }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.model_number }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.secondary_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.configuration }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.upholstery_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.upholstery_color }}
          </h2>
        </div>

        <!-- Body second -->
        <div id="body-second" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.filling_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.finish_type }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.maximum_load_capacity }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.origin_of_manufacture }}
          </h2>
        </div>

        <!-- Body third -->
        <div id="body-third" class="flex flex-col gap-8 mt-2">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.width }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.height }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.depth }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.weight }}
          </h2>
        </div>

        <!-- Body fourth -->
        <div id="body-fourth" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.warranty_summary }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.warranty_service_type }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">1 Year</h2>
          <el-button
            @click="addToCart(product1?.id, product1?.name)"
            type="warning"
            style="padding: 25px; width: 150px"
            >Add to card</el-button
          >
        </div>
      </div>
    </div>

    <!-- Third -->
    <div v-if="product2" id="second" class="w-[22%]">
      <!-- Head -->
      <div id="head">
        <img
          :src="product2?.image[0]?.img_url"
          alt="Product img"
          class="w-[280px] h-[150px]"
        />
        <h1>{{ product2?.name }}</h1>
        <h2>{{ formatNumber(product2?.price) }}$</h2>
        <div class="flex items-center">
          <el-rate v-model="value3" allow-half disabled class="pr-3" />
          <h1
            id="rate"
            class="pl-5 text-[13px] font-['Poppins'] text-[#9F9F9F]"
          >
            {{ product2?.reviews?.length }} reviews
          </h1>
        </div>
      </div>

      <!-- Body -->
      <div
        v-for="(item, index) in product2?.additionalInformation"
        :key="index"
        id="body"
        class="flex flex-col gap-36 mt-40"
      >
        <!-- Body first -->
        <div id="body-first" class="flex flex-col gap-8 mt-[-10px]">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.sales_package }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.model_number }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.secondary_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.configuration }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.upholstery_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.upholstery_color }}
          </h2>
        </div>

        <!-- Body second -->
        <div id="body-second" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.filling_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.finish_type }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.maximum_load_capacity }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.origin_of_manufacture }}
          </h2>
        </div>

        <!-- Body third -->
        <div id="body-third" class="flex flex-col gap-8 mt-2">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.width }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.height }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.depth }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.weight }}
          </h2>
        </div>

        <!-- Body fourth -->
        <div id="body-fourth" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.warranty_summary }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.warranty_service_type }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">1 Year</h2>
          <el-button
            @click="addToCart(product2?.id, product2?.name)"
            type="warning"
            style="padding: 25px; width: 150px"
            >Add to card</el-button
          >
        </div>
      </div>
    </div>

    <!-- Fourth -->
    <div v-if="product3" id="second" class="w-[22%]">
      <!-- Head -->
      <div id="head">
        <img
          :src="product3?.image[0]?.img_url"
          alt="Product img"
          class="w-[280px] h-[150px]"
        />
        <h1>{{ product3?.name }}</h1>
        <h2>{{ formatNumber(product3?.price) }}$</h2>
        <div class="flex items-center">
          <el-rate v-model="value4" allow-half disabled class="pr-3" />
          <h1
            id="rate"
            class="pl-5 text-[13px] font-['Poppins'] text-[#9F9F9F]"
          >
            {{ product3?.reviews?.length }} reviews
          </h1>
        </div>
      </div>

      <!-- Body -->
      <div
        v-for="(item, index) in product3?.additionalInformation"
        :key="index"
        id="body"
        class="flex flex-col gap-36 mt-40"
      >
        <!-- Body first -->
        <div id="body-first" class="flex flex-col gap-8 mt-[-10px]">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.sales_package }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.model_number }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.secondary_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.configuration }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.upholstery_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.upholstery_color }}
          </h2>
        </div>

        <!-- Body second -->
        <div id="body-second" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.filling_material }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.finish_type }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.maximum_load_capacity }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.origin_of_manufacture }}
          </h2>
        </div>

        <!-- Body third -->
        <div id="body-third" class="flex flex-col gap-8 mt-2">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.width }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.height }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.depth }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.weight }}
          </h2>
        </div>

        <!-- Body fourth -->
        <div id="body-fourth" class="flex flex-col gap-8 mt-3">
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.warranty_summary }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">
            {{ item?.warranty_service_type }}
          </h2>
          <h2 class="font-['Poppins'] text-[20px] font-normal">1 Year</h2>
          <el-button
            @click="addToCart(product3?.id, product3?.name)"
            type="warning"
            style="padding: 25px; width: 150px"
            >Add to card</el-button
          >
        </div>
      </div>
    </div>

    <!-- Add product -->
    <div v-if="!product3">
      <h1>Add a product</h1>
      <el-select v-model="value1" filterable placeholder="Choose a product">
        <el-option
          v-for="item in productStore.limit"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../../stores/product";
import { useCartStore } from "../../stores/cart";
import { ElMessage } from "element-plus";
import { ElNotification } from "element-plus";

const cartStore = useCartStore();
const productStore = useProductStore();
const route = useRoute();
let value = computed(() => {
  let counter = ref(0);
  product1.value?.reviews.forEach((element) => {
    counter.value += element.rate;
  });
  counter.value = counter.value / product1.value?.reviews.length;
  return counter.value;
});

let value3 = computed(() => {
  let counter = ref(0);
  product2.value?.reviews.forEach((element) => {
    counter.value += element.rate;
  });
  counter.value = counter.value / product2.value?.reviews.length;
  return counter.value;
});

let value4 = computed(() => {
  let counter = ref(0);
  product3.value?.reviews.forEach((element) => {
    counter.value += element.rate;
  });
  counter.value = counter.value / product3.value?.reviews.length;
  return counter.value;
});

const product1 = ref();
const loading1 = ref(false);

const options = ref();

function formatNumber(number) {
  try {
    const numberStr = number.toString();
    if (numberStr.length < 4) {
      return numberStr;
    }

    let formattedNumber = "";
    let counter = 0;
    for (const digit of numberStr.split("").reverse()) {
      formattedNumber = digit + formattedNumber;
      counter += 1;
      if (counter % 3 === 0 && counter !== numberStr.length) {
        formattedNumber = "," + formattedNumber;
      }
    }
    return formattedNumber;
  } catch (error) {}
}
const productrate = () => {};
productrate();

const product2 = ref();
const product3 = ref();
const value1 = ref();
watch(value1, async (value) => {
  if (!product2.value) {
    ElMessage({
      message: "Please wait",
      duration: 1500,
    });
    product2.value = await productStore.getProductById(value);
  } else if (!product3.value && value != "") {
    ElMessage({
      message: "Please wait",
      duration: 1500,
    });
    product3.value = await productStore.getProductById(value);
  }
  value1.value = "";
});

// AddToCart
const addToCart = async (id, name) => {
  const payload = {
    user_id: Number(localStorage.getItem("userid")),
    product_id: id,
    quantity: 1,
  };
  await cartStore.addToCart(payload);
  ElNotification({
    title: "Product added to cart",
    message: name,
    type: "success",
  });
};
onMounted(async () => {
  loading1.value = true;
  product1.value = await productStore.getProductById(route.params.id);
  loading1.value = false;
  const params = {
    limit: 50,
  };
  options.value = await productStore.getProductsByLimit(params);
});
</script>

<style lang="scss" scoped>
#rate {
  border-left: 1px solid #9f9f9f;
}
</style>
