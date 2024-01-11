<template>
  <div id="main" class="flex justify-between ml-10 mr-10 p-[29px]">
    <!-- Logo -->
    <a href="/" id="logo" class="flex justify-center items-center gap-2">
      <img src="/logo.png" alt="Logo img" />
      <h1 class="font-['Montserrat'] text-[34px] font-bold">Furniro</h1>
    </a>

    <!-- Center -->
    <div id="center" class="flex justify-center items-center gap-[75px]">
      <a href="/" class="font-['Poppins'] text-[16px] font-medium">Home</a>
      <a href="/shop" class="font-['Poppins'] text-[16px] font-medium">Shop</a>
      <a href="/about" class="font-['Poppins'] text-[16px] font-medium"
        >About</a
      >
      <a href="/contact" class="font-['Poppins'] text-[16px] font-medium"
        >Contact</a
      >
    </div>
    <div id="end" class="flex justify-center items-center gap-[45px]">
      <a href="#">
        <i class="fa-regular fa-user cursor-pointer"></i>
      </a>
      <a href="shop">
        <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
      </a>
      <a href="#">
        <i class="fa-regular fa-heart cursor-pointer"></i>
      </a>
      <a href="/cart">
        <i class="fa-brands fa-opencart cursor-pointer"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  #main {
    margin-left: 0px;
    margin-right: 0px;
  }
}

@media screen and (max-width: 900px) {
  #center {
    gap: 20px;
  }
  #end {
    gap: 15px;
  }
}

@media screen and (max-width: 650px) {
  #main {
    flex-direction: column;
    gap: 20px;
  }
  #end {
    gap: 50px;
  }
}
</style>
