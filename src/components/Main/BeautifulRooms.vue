<template>
  <div id="main" class="flex flex-col bg-[#FCF8F3] mt-20 mb-10 pb-8">
    <div class="flex flex-col items-center text-center">
      <h1 class="font-['Poppins'] text-[40px] font-bold mt-5 text-[#3a3a3a]">
        50+ Beautiful rooms inspiration
      </h1>
      <h3 class="font-['Poppins'] text-[16px] font-medium text-[#616161]">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </h3>
      <a href="/shop">
        <el-button
          id="button"
          type="warning"
          class="mt-5 mb-5 font-['Poppins']"
          style="border-radius: 2px"
          >Explore more</el-button
        >
      </a>
    </div>

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item
        v-for="item in images"
        :key="item"
        style="display: flex; justify-content: center"
      >
        <img :src="item" alt="Carusel img" class="h-[100%]" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../../router";
const images = ref({
  one: "https://th.bing.com/th/id/R.014bcc9239e4d14ab003dc2959a28c53?rik=qzonHMs51NOMnA&riu=http%3a%2f%2fawesome11.com%2fwp-content%2fuploads%2f2016%2f07%2fFeng-Shui-Living-Room-Decor.jpg&ehk=PIWxYpoRrLseqmsoDnv%2b4r4VEM7zHm%2bt1Bg44KMg8%2f8%3d&risl=&pid=ImgRaw&r=0",
  two: "https://havenly.com/blog/wp-content/uploads/2020/07/contemporary-bedroom-3-1710x970.jpeg",
  three:
    "https://www.architectureartdesigns.com/wp-content/uploads/2016/03/10-17-630x420.jpg",
  four: "https://cdn.mos.cms.futurecdn.net/Wh9xAztoNRL59fE6aYttjM-768-80.jpg",
  five: "https://ownbydesign.com/wp-content/uploads/2020/07/Fireplace-tight-e-800x526.jpg",
});

const goToShop = () => {
  router.push(`/shop`);
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

@media screen and (max-width: 900px) {
  #button {
    padding: 18px 60px;
  }
}
</style>
