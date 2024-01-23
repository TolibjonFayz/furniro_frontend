<template>
  <div
    id="main"
    class="bg-[url('/main.png')] h-[800px] bg-center bg-repeat-x mt-[-40px] flex justify-center items-center"
  >
    <div id="first" class="w-[50%]"></div>
    <div
      id="second"
      class="w-[45%] h-[50%] flex flex-col justify-center bg-[#FFF3E3] p-[41px] rounded-md"
    >
      <h5
        class="font-['Poppins'] font-semibold text-[16px] tracking-[3px] text-[#333]"
      >
        New Arrival
      </h5>

      <h1
        class="w-[70%] font-['Poppins'] text-[52px] text-[#E6A23C] font-bold leading-[65px]"
      >
        Discover Our New Collection
      </h1>

      <p class="font-['Poppins'] text-[18px] font-medium leading-[24px]">
        Embrace the change with our curated selection of arrivals, meticulously
        crafted for modern lives.
      </p>
      <a href="/shop">
        <el-button
          id="button"
          type="warning"
          class="w-[30%] mt-[46px] font-['Poppins']"
          style="padding: 25px 72px; font-weight: 700; border-radius: 2px"
          >BUY NOW</el-button
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  #first {
    display: none;
  }
  #second {
    width: 90%;
  }
}

@media screen and (max-width: 750px) {
  #second {
    padding: 25px;
  }
}

@media screen and (max-width: 600px) {
  #second {
    h5 {
      font-size: 14px;
    }
    h1 {
      font-size: 40px;
      line-height: 50px;
      width: 100%;
    }
    p {
      font-size: 15px;
    }
  }
}
</style>
