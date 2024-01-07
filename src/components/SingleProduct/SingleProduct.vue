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
          v-for="slide in images"
          :key="slide"
          class="h-[400px] bg-[#F9F1E7] flex items-center justify-center rounded-[10px]"
        >
          <div class="carousel__item flex items-center justify-center">
            <img :src="slide" alt="" class="h-[350px]" />
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
        <Slide v-for="slide in images" :key="slide" class="h-[100px]">
          <div
            class="carousel__item flex items-center justify-center h-full w-[96%] rounded-[5%] bg-[#F9F1E7]"
          >
            <img :src="slide" alt="img" class="h-[60px]" />
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
      <h1 class="font-['Poppins'] text-[42px] font-normal">Asgard sofa</h1>
      <h2 class="font-['Poppins'] text-[24px] font-medium text-[#9F9F9F]">
        2.000.000 $
      </h2>
      <div class="flex items-center">
        <el-rate v-model="value" allow-half disabled class="pr-3" />
        <h1 id="rate" class="pl-5 text-[13px] font-['Poppins'] text-[#9F9F9F]">
          5 customer reviews
        </h1>
      </div>
      <p id="pi" class="w-[60%] font-['Poppins'] text-[13px]">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>

      <!-- Size -->
      <h2 class="font-['Poppins'] text-[14px] text-[#9F9F9F] mt-5 mb-2">
        Size
      </h2>
      <div>
        <el-button plain>L</el-button>
        <el-button plain>XL</el-button>
        <el-button plain>XS</el-button>
      </div>

      <!-- Color -->
      <h2 class="font-['Poppins'] text-[14px] text-[#9F9F9F] mt-5 mb-2">
        Color
      </h2>
      <div>
        <el-button circle :style="`background-color: #816DFA`" />
        <el-button circle :style="`background-color: #000`" />
        <el-button circle :style="`background-color: #B88E2F`" />
      </div>

      <!-- Buttons -->
      <div id="buttons" class="flex gap-5 pb-14 mt-8">
        <el-input-number v-model="num" :min="1" />
        <el-button plain>Add to cart</el-button>
        <el-button plain style="margin-left: 0px"
          ><i class="fa-solid fa-plus mr-1 mt-[2px]"></i>Compare</el-button
        >
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
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">: Sofas</h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">
            : Sofa, Chair, Home, Shop
          </h1>
          <h1 class="font-['Poppins'] text-[16px] text-[#9F9F9F]">
            : <i class="fa-brands fa-facebook text-[#000] mr-6"></i>
            <i class="fa-brands fa-linkedin text-[#000] mr-6"></i>
            <i class="fa-brands fa-x-twitter text-[#000]"></i>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const num = ref(1);
const value = ref(4.5);
const images = ref({
  one: "https://th.bing.com/th/id/R.014bcc9239e4d14ab003dc2959a28c53?rik=qzonHMs51NOMnA&riu=http%3a%2f%2fawesome11.com%2fwp-content%2fuploads%2f2016%2f07%2fFeng-Shui-Living-Room-Decor.jpg&ehk=PIWxYpoRrLseqmsoDnv%2b4r4VEM7zHm%2bt1Bg44KMg8%2f8%3d&risl=&pid=ImgRaw&r=0",
  two: "https://havenly.com/blog/wp-content/uploads/2020/07/contemporary-bedroom-3-1710x970.jpeg",
  three:
    "https://www.architectureartdesigns.com/wp-content/uploads/2016/03/10-17-630x420.jpg",
  four: "https://cdn.mos.cms.futurecdn.net/Wh9xAztoNRL59fE6aYttjM-768-80.jpg",
  five: "https://ownbydesign.com/wp-content/uploads/2020/07/Fireplace-tight-e-800x526.jpg",
});

import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const currentSlide = ref(0);
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
