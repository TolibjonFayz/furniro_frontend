<template>
  <div id="main" class="flex flex-col items-center text-center">
    <h1 class="font-['Poppins'] text-[32px] font-bold text-[#333]">
      Browse The Range
    </h1>
    <h3 class="font-['Poppins'] text-[20px] font-normal text-[#666]">
      Less is more. Elevate your space with timeless designs built for serenity.
    </h3>
    <a id="second" href="/shop" class="flex gap-5 mt-12">
      <div id="in" class="flex flex-col items-center gap-5">
        <img src="/image1.png" alt="Img1" class="bg rounded-md" />
        <h2 class="font-['Poppins'] text-[24px] font-semibold text-[#333]">
          Dining
        </h2>
      </div>
      <div id="in" class="flex flex-col items-center gap-5">
        <img src="/image2.png" alt="Img1" />
        <h2 class="font-['Poppins'] text-[24px] font-semibold text-[#333]">
          Living(sofa)
        </h2>
      </div>
      -
      <div id="in" class="flex flex-col items-center gap-5">
        <img src="/image3.png" alt="Img1" />
        <h2 class="font-['Poppins'] text-[24px] font-semibold text-[#333]">
          Bedroom
        </h2>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  #second {
    flex-direction: column;
  }
}
</style>
