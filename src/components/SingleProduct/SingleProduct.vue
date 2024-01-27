<template>
  <div id="main" class="flex mt-10 justify-center gap-20">
    <!-- First -->
    <div id="first" class="w-[60%] ml-10">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="true"
        v-model="currentSlide"
        :transition="800"
      >
        <Slide
          id="slide"
          v-for="slide in $props.alldata.image"
          :key="slide"
          class="h-[400px] bg-[#F9F1E7] flex items-center justify-center rounded-[10px]"
        >
          <div class="carousel__item flex items-center justify-center">
            <img :src="slide.img_url" alt="img" class="h-[350px]" />
          </div>
        </Slide>
        <template #addons>
          <div class="flex">
            <navigation />
          </div>
        </template>
      </Carousel>
      <Carousel
        class="mt-3"
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
        :transition="400"
      >
        <Slide
          v-for="slide in $props.alldata.image"
          :key="slide"
          class="h-[100px]"
        >
          <div
            class="carousel__item flex items-center justify-center h-full w-[96%] rounded-[5%] bg-[#F9F1E7]"
          >
            <img :src="slide.img_url" alt="img" class="h-[60px]" />
          </div>
        </Slide>
        <template #addons>
          <div class="flex">
            <navigation />
          </div>
        </template>
      </Carousel>
    </div>

    <!-- Second -->
    <div id="second" class="flex flex-col justify-start w-[50%]">
      <h1 class="font-['Poppins'] text-[42px] font-normal">
        {{ $props.alldata.name }}
      </h1>
      <h2 class="font-['Poppins'] text-[24px] font-medium text-[#9F9F9F]">
        {{ formatNumber($props.alldata.price) }}$
      </h2>
      <div class="flex items-center">
        <el-rate v-model="value" allow-half disabled class="pr-3" />
        <h1 id="rate" class="pl-5 text-[13px] font-['Poppins'] text-[#9F9F9F]">
          {{ $props.alldata.reviews?.length }} customer reviews
        </h1>
      </div>
      <p id="pi" class="w-[60%] font-['Poppins'] text-[13px]">
        {{ $props.alldata.description }}
      </p>

      <!-- Size -->
      <h2 class="font-['Poppins'] text-[14px] text-[#9F9F9F] mt-5 mb-2">
        Size
      </h2>
      <div>
        <el-button
          plain
          v-for="(item, index) in $props.alldata.product_size"
          :key="index"
          >{{ item.sizes?.name }}</el-button
        >
      </div>

      <!-- Color -->
      <h2 class="font-['Poppins'] text-[14px] text-[#9F9F9F] mt-5 mb-2">
        Color
      </h2>
      <div>
        <el-button
          v-for="(item, index) in $props.alldata.product_color"
          circle
          :style="`background-color: ${item.color?.hex_code}`"
        />
      </div>

      <!-- Buttons -->
      <div id="buttons" class="flex gap-5 pb-14 mt-8">
        <el-input-number v-model="num" :min="1" />
        <el-button plain @click="addToCart()">Add to cart</el-button>
        <a :href="`/comparison/${route.params.id}`">
          <el-button plain style="margin-left: 0px"
            ><i class="fa-solid fa-plus mr-1 mt-[2px]"></i>Compare</el-button
          >
        </a>
      </div>

      <!-- Xira qism -->
      <div class="flex gap-5 mt-10">
        <div id="xira-f">
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">SKU</h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">Category</h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">Tags</h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">Share</h1>
        </div>
        <div id="xira-s">
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">: SS001</h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">
            : {{ props.alldata.category?.name }}
          </h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">
            : Sofa, Chair, Home, Shop
          </h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">
            :
            <i
              class="fa-brands fa-facebook text-[#000] mr-6 cursor-pointer"
            ></i>
            <i
              class="fa-brands fa-linkedin text-[#000] mr-6 cursor-pointer"
            ></i>
            <i class="fa-brands fa-x-twitter text-[#000] cursor-pointer"></i>
          </h1>
        </div>
      </div>
    </div>
  </div>
  <!-- Profile dialog -->
  <el-dialog
    v-model="dialogVisible"
    title="Enter your phone number"
    width="30%"
    :before-close="handleClose"
  >
    <!-- Telefon raqam davri -->
    <h1 v-if="kodnidavri == false" class="mt-[-30px] mb-8">
      We will send you a verification code via SMS
    </h1>
    <el-input
      v-if="kodnidavri == false"
      v-model="number"
      placeholder="00 000-00-00"
    >
      <template #prepend>+998</template>
    </el-input>
    <el-button
      v-if="kodnidavri == false"
      type="primary"
      class="mt-2"
      @click="send_sms()"
      >Send code</el-button
    >

    <!-- Kodni davri -->
    <h1 v-if="kodnidavri == true" class="mt-[-30px] mb-8">
      A 4-digit code has been sent to this number <b>{{ number }}</b> for verify
      your phone
    </h1>
    <el-input
      v-if="kodnidavri == true"
      v-model="kod"
      placeholder="Enter the code"
    />
    <el-button
      @click="gooo()"
      v-if="kodnidavri == true"
      type="primary"
      class="mt-2"
      >Enter</el-button
    >
  </el-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../../stores/cart";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import { useUserStore } from "../../stores/user";

const cartStore = useCartStore();
const route = useRoute();

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

const num = ref(1);
const currentSlide = ref(0);

const props = defineProps({
  alldata: {
    type: Object,
  },
});

const value = computed(() => {
  let totalRate = 0;
  if (props.alldata && props.alldata.reviews) {
    props.alldata.reviews.forEach((element) => {
      totalRate += element.rate;
    });
    return totalRate / props.alldata.reviews.length;
  }
});

const number = ref("");
const kod = ref("");
let logininfo = ref();
const userStore = useUserStore();
const dialogVisible = ref(false);
const kodnidavri = ref(false);
// add to cart
const addToCart = async () => {
  const userid = localStorage.getItem("userid");
  if (!userid) dialogVisible.value = true;
  else {
    const payload = {
      user_id: Number(localStorage.getItem("userid")),
      product_id: Number(route.params.id),
      quantity: num.value,
    };
    await cartStore.addToCart(payload);
    ElNotification({
      title: "Product added to cart",
      message: props.alldata.name,
      type: "success",
    });
  }
};

const handleClose = (done) => {
  ElMessageBox.confirm("Do you want to close this dialog ?")
    .then(() => {
      done();
    })
    .catch((error) => {
      console.log(error);
    });
};

const send_sms = async () => {
  logininfo.value = await userStore.logInUser({
    phone_number: `+998${number.value}`,
  });
  kodnidavri.value = true;
};

const gooo = async () => {
  await userStore.verifyOtp({
    phone_number: `+998${number.value}`,
    verification_key: logininfo.value.otpinfo.details,
    otp: kod.value,
    userId: logininfo.value.user.id,
  });
  localStorage.setItem("userid", logininfo.value.user.id);
  localStorage.setItem("refreshtoken", logininfo.value.tokens.refreshToken);
  ElNotification({
    title: "Successfully",
    message: ("i", { style: "color: teal" }, "You have successfully logged in"),
    type: "success",
  });

  setTimeout(() => {
    location.reload();
  }, 2000);
};
</script>

<style lang="scss" scoped>
#buttons {
  border-bottom: 1px solid #d9d9d9;
}
#rate {
  border-left: 1px solid #9f9f9f;
}

@media screen and (max-width: 900px) {
  #main {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  #first {
    width: 80%;
  }
  #second {
    width: 80%;
  }
}

@media screen and (max-width: 700px) {
  #first {
    width: 95%;
    margin-left: 0;
  }
  #pi {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  #slide {
    height: 300px;
  }
}

@media screen and (max-width: 500px) {
  #slide {
    height: 200px;
  }
  #buttons {
    flex-direction: column;
    el-button {
      width: 500px;
    }
  }
}
</style>
