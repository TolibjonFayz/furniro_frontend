<template>
  <div id="main" class="pt-10">
    <div id="first" class="flex justify-around">
      <div id="first-one" class="flex flex-col gap-20">
        <a href="/" class="font-['Poppins'] text-[24px] font-bold">Furniro.</a>
        <h4
          class="w-[285px] font-['Poppins'] text-[16px] font-normal text-[#9F9F9F]"
        >
          Najot Ta'lim, Toshkent, Uzbekistan
        </h4>
      </div>

      <div class="flex gap-36">
        <div id="first-two" class="flex flex-col gap-8">
          <h2 class="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]">
            Links
          </h2>
          <a
            href="/"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            Home
          </a>
          <a
            href="/shop"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            Shop
          </a>
          <a
            href="/about"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            About
          </a>
          <a
            href="/contact"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            Contact
          </a>
        </div>

        <div id="first-three" class="flex flex-col gap-8">
          <h2 class="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]">
            Help
          </h2>
          <h3
            @click="underDevelopment()"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            Payment Options
          </h3>
          <h3
            @click="underDevelopment()"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            Returns
          </h3>
          <h3
            @click="underDevelopment()"
            class="font-['Poppins'] text-[16px] font-medium cursor-pointer"
          >
            Privacy Policies
          </h3>
        </div>
      </div>

      <div id="first-four" class="flex flex-col gap-7">
        <h2 class="font-['Poppins'] text-[16px] font-medium text-[#9F9F9F]">
          Newsletter
        </h2>
        <div class="flex gap-1">
          <div>
            <el-input
              v-model="email"
              maxlength="40"
              placeholder="Enter Your Email Address"
            />
            <el-alert
              v-if="isEmailValid"
              title="Fill this field correctly"
              type="error"
            />
            <el-alert
              v-if="isEmail"
              title="Please enter your email address correctly"
              type="error"
            />
          </div>

          <el-button v-if="!subscribeLoadBtn" @click="subscribe()"
            >SUBSCRIBE</el-button
          >
          <el-button v-if="subscribeLoadBtn" type="primary" loading
            >Please wait...</el-button
          >
        </div>
      </div>
    </div>

    <div id="second" class="flex mt-5 justify-center mb-5">
      <h1 class="w-[88%] pt-5 font-['Poppins'] text-[16px] font-normal">
        2024, Furniro, (Tolibjon Fayzullayev). All rights reserved
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { ElNotification } from "element-plus";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const email = ref("");
const isEmailValid = ref(false);
const isEmail = ref(false);
const subscribeLoadBtn = ref(false);

const subscribe = async () => {
  if (email.value.length <= 10) {
    isEmailValid.value = true;
  } else if (email.value.search("@gmail.com") < 0) {
    isEmail.value = true;
    isEmailValid.value = false;
  } else {
    isEmailValid.value = false;
    isEmail.value = false;
    subscribeLoadBtn.value = true;
    const payload = {
      userinfo: email.value,
      products: "This user is connected to newspaper",
    };
    await userStore.sendMessageToUser(payload);
    setTimeout(() => {
      subscribeLoadBtn.value = false;
      ElNotification({
        title: "Successfully",
        message: "Thank you for subscribing to the Furniro newsletter.",
        type: "success",
      });
      email.value = "";
    }, 1000);
  }
};

const underDevelopment = () => {
  ElMessage({
    message: "Sorry, this service is under development.",
    type: "warning",
  });
};
</script>

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
.el-alert {
  margin: 5px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
