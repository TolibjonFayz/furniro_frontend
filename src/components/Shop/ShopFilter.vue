<template>
  <div
    id="main"
    class="flex bg-[#F9F1E7] justify-between pl-20 pr-20 pt-8 pb-8 items-center"
  >
    <div id="first" class="flex items-center gap-5">
      <i class="fa-solid fa-sliders cursor-pointer"></i>
      <h1 class="font-['Poppins'] text-[20px] font-normal">Filter</h1>
      <i class="fa-solid fa-grip-vertical cursor-pointer"></i>
      <i class="fa-solid fa-bars-staggered cursor-pointer"></i>
      <h2 id="showing" class="font-['Poppins'] text-[16px] font-normal pl-3">
        Showing 1–16 of 32 results
      </h2>
    </div>

    <div id="second" class="flex items-center gap-5">
      <h1 class="font-['Poppins'] text-[20px] font-normal">Show</h1>
      <el-input
        v-model="input"
        placeholder="16"
        style="width: 45px"
        maxlength="3"
      />
      <h1 class="font-['Poppins'] text-[20px] font-normal">Sort by</h1>
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const input = ref("");
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
    disabled: true,
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<style lang="scss" scoped>
#showing {
  border-left: 1px solid #9f9f9f;
}
@media screen and (max-width: 900px) {
  #main {
    flex-direction: column;
    gap: 20px;
  }
}

@media screen and (max-width: 580px) {
  #main {
    padding-left: 5px;
    padding-right: 5px;
  }
}

@media screen and (max-width: 500px) {
#second{
  gap: 5px;
  h1 {
    font-size: 16px;
  }
}
}
</style>
