<template>
  <div id="blog" class="flex flex-col w-[20%]">
    <img src="/image1.png" alt="Blog img" />

    <div id="hover">
      <el-button
        type="warning"
        plain
        style="padding: 15px 50px; border-radius: 2px"
        >Add to cart</el-button
      >
      <div class="flex p-5 gap-3">
        <h3 class="flex items-center gap-2 text-[16px] cursor-pointer">
          <i class="fa-solid fa-share-nodes"></i> Share
        </h3>
        <h3 class="flex items-center gap-2 text-[16px] cursor-pointer">
          <i class="fa-solid fa-code-compare"></i> Compare
        </h3>
        <h3 class="flex items-center gap-2 text-[16px] cursor-pointer">
          <i class="fa-regular fa-heart"></i> Like
        </h3>
      </div>
    </div>

    <div class="flex flex-col p-3 bg-[#F4F5F7] gap-2">
      <h1 class="font-['Poppins'] text-[24px] font-semibold text-[#3A3A3A]">
        Syltherine
      </h1>
      <h3 class="font-['Poppins'] text-[16px] font-medium text-[#898989]">
        Stylish cafe chair
      </h3>
      <h2 class="font-['Poppins'] text-[20px] font-semibold text-[#3A3A3A]">
        20.000 USD
      </h2>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#blog {
  position: relative;
}
#blog:hover #hover {
  opacity: 0.9;
  transition: all ease-in-out 0.1s;
}
#hover {
  position: absolute;
  display: flex;
  bottom: 0;
  top: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #3a3a3a;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  font-size: 25px;
}

@media screen and (max-width: 1000px) {
  #blog {
    width: 30%;
  }
}

@media screen and (max-width: 850px) {
  #blog {
    width: 40%;
  }
}

@media screen and (max-width: 650px) {
  #blog {
    width: 70%;
  }
}

@media screen and (max-width: 450px) {
  #blog {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  #blog {
    width: 100%;
  }
}
</style>
