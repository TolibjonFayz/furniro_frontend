<template>
  <el-empty
    class="font-['Poppins']"
    v-if="isEmpty"
    description="Your cart is empty"
  />
  <div
    v-if="!isEmpty"
    v-loading="loading"
    id="main"
    class="flex font-['Poppins'] justify-between items-center mt-[-100px] mb-20"
  >
    <div id="left" class="w-[65%] flex items-center flex-col mt-16">
      <div
        id="l-top"
        class="w-[100%] flex justify-start gap-20 bg-[#F9F1E7] p-8 ml-40 pl-40"
      >
        <h1 class="font-['Poppins'] text-[16px] font-medium mr-10">Product</h1>
        <h1 class="font-['Poppins'] text-[16px] font-medium ml-20">Price</h1>
        <h1 class="font-['Poppins'] text-[16px] font-medium ml-5">Quantity</h1>
      </div>
      <div id="l-products">
        <div
          v-for="(item, index) in cartStore.cart"
          :key="index"
          id="product"
          class="w-[100%] flex items-center gap-20 mt-3"
        >
          <div class="w-[42%] flex items-center">
            <img :src="images[index]" alt="img" class="w-[111px] mr-3" />
            <h1 class="w-[80%]">{{ item?.product?.name }}</h1>
          </div>
          <h2>{{ formatNumber(item?.product?.price * item?.quantity) }}$</h2>
          <el-input-number
            :min="1"
            v-model="item.quantity"
            size="small"
            @change="changeQuantity(item.id, item.quantity)"
          />
          <i
            @click="deleteCart(item.id)"
            class="fa-solid fa-trash text-[#B88E2F] cursor-pointer"
          ></i>
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
          {{ totalSum }}$
        </h2>
      </div>
      <a href="/checkout">
        <el-button
          type="warning"
          style="padding: 30px 50px; font-size: 20px; color: #000"
          plain
          >Check out</el-button
        >
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCartStore } from "../../stores/cart";
import { useImageStore } from "../../stores/images";
const loading = ref(true);
const isEmpty = ref(false);
const cartStore = useCartStore();
const imageStore = useImageStore();

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

const changeQuantity = async (id, number_quantity) => {
  await cartStore.updateCart(id, { quantity: number_quantity });
};

const deleteCart = async (id) => {
  await cartStore.deleteCart(id);
  location.reload();
};

const images = ref(Array());
onMounted(async () => {
  const userId = Number(localStorage.getItem("userid"));
  const cartproducts = await cartStore.getUserCart(userId);
  if (cartStore.cart.length < 1) {
    isEmpty.value = true;
  }
  loading.value = false;

  //Collecting images
  cartproducts.forEach(async (element) => {
    const result = await imageStore.getImageByProductId(element.product_id);
    images.value.push(result.img_url);
  });
});

// Calculate total summ
const totalSum = computed(() => {
  let sum = 0;
  cartStore.cart.forEach((item) => {
    sum += item.product.price * item.quantity;
  });
  return sum;
});
</script>

<style lang="scss" scoped></style>
