<template>
  <div id="main" class="pt-10">
    <div id="first" class="flex justify-around">
      <div id="first-one" class="flex flex-col gap-20">
        <h1 class="font-['Poppins'] text-[24px] font-bold">Furniro.</h1>
        <h4
          class="w-[285px] font-['Poppins'] text-[16px] font-normal text-[#9F9F9F]"
        >
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </h4>
      </div>

      <div class="flex gap-20">
        <div id="first-two" class="flex flex-col gap-8">
          <h2 class="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]">
            Links
          </h2>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            Home
          </h3>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            Shop
          </h3>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            About
          </h3>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            Contact
          </h3>
        </div>

        <div id="first-three" class="flex flex-col gap-8">
          <h2 class="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]">
            Help
          </h2>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            Payment Options
          </h3>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            Returns
          </h3>
          <h3 class="font-['Poppins'] text-[16px] font-medium cursor-pointer">
            Privacy Policies
          </h3>
        </div>
      </div>

      <div id="first-four" class="flex flex-col gap-7">
        <h2 class="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]">
          Newsletter
        </h2>
        <div class="flex">
          <el-input placeholder="Enter Your Email Address" />
          <el-button>SUBSCRIBE</el-button>
        </div>
      </div>
    </div>

    <div id="second" class="flex mt-5 justify-center mb-5">
      <h1 class="w-[88%] pt-5 font-['Poppins'] text-[16px] font-normal">
        2023 furino. All rights reverved
      </h1>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#main,
#second h1 {
  border-top: 1px solid rgba(0, 0, 0, 0.17);
}

@media screen and (max-width: 800px) {
  #first {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  #second {
    text-align: center;
  }
}
</style>
