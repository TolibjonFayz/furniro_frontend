<template>
  <div id="main" class="flex justify-around bg-[#FAF3EA] pt-16 pb-16">
    <div id="first" class="flex items-center gap-3">
      <i class="fa-solid fa-trophy text-[40px]"></i>
      <div>
        <h1 class="font-['Poppins'] text-[22px] font-semibold text-[#242424]">
          High Quality
        </h1>
        <h3 class="font-['Poppins'] text-[16px] font-medium text-[#898989]">
          Crafted from top materials
        </h3>
      </div>
    </div>

    <div id="second" class="flex items-center gap-3">
      <i class="fa-solid fa-award text-[40px]"></i>
      <div>
        <h1 class="font-['Poppins'] text-[22px] font-semibold text-[#242424]">
          Warranty Protection
        </h1>
        <h3 class="font-['Poppins'] text-[16px] font-medium text-[#898989]">
          Over 2 years
        </h3>
      </div>
    </div>

    <div id="third" class="flex items-center gap-3">
      <i class="fa-solid fa-truck-fast text-[40px]"></i>
      <div>
        <h1 class="font-['Poppins'] text-[22px] font-semibold text-[#242424]">
          Free Shipping
        </h1>
        <h3 class="font-['Poppins'] text-[16px] font-medium text-[#898989]">
          Order over 150 $
        </h3>
      </div>
    </div>

    <div id="fourth" class="flex items-center gap-3">
      <i class="fa-solid fa-headset text-[40px]"></i>
      <div>
        <h1 class="font-['Poppins'] text-[22px] font-semibold text-[#242424]">
          24 / 7 Support
        </h1>
        <h3 class="font-['Poppins'] text-[16px] font-medium text-[#898989]">
          Dedicated support
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  #main {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
}
</style>
