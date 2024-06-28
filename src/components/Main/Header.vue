<template>
  <div id="main" class="flex justify-between ml-10 mr-10 p-[29px]">
    <!-- Logo -->
    <a
      href="/"
      id="logo"
      class="font-['Montserrat'] flex justify-center items-center gap-2"
    >
      <img src="/logo.png" alt="Logo img" />
      <h1 class="text-[34px] font-bold">Furniro</h1>
      <h2
        class="p-1 text-[10px] text-[#E6A23C] font-medium"
        style="border: 2px solid #e6a23c; border-radius: 10px"
      >
        Experiment
      </h2>
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
      <a title="Profile" @click="changeDialogValue('user')">
        <i class="fa-regular fa-user cursor-pointer"></i>
      </a>
      <a title="Search products" href="shop">
        <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
      </a>
      <a title="Likes" @click="changeDialogValue('likes')">
        <i class="fa-regular fa-heart cursor-pointer"></i>
      </a>
      <a title="Cart" @click="changeDialogValue('cart')">
        <i class="fa-brands fa-opencart cursor-pointer"></i>
      </a>
    </div>
  </div>

  <!-- Profile dialog -->
  <el-dialog
    v-model="dialogVisible"
    title="Enter your phone number"
    width="30%"
    :before-close="handleClose"
  >
    <!-- Telefon raqam davri -->
    <h1 v-if="kodnidavri == false" class="mt-[-30px] mb-8">
      We will send you a verification code via SMS
    </h1>
    <el-input
      v-if="kodnidavri == false"
      v-model="number"
      placeholder="00 000-00-00"
    >
      <template #prepend>+998</template>
    </el-input>
    <el-button
      v-if="kodnidavri == false"
      type="primary"
      class="mt-2"
      @click="send_sms()"
      >Send code</el-button
    >

    <!-- Kodni davri -->
    <h1 v-if="kodnidavri == true" class="mt-[-30px] mb-8">
      A 4-digit code has been sent to this number <b>{{ number }}</b> for verify
      your phone
    </h1>
    <el-input
      v-if="kodnidavri == true"
      v-model="kod"
      placeholder="Enter the code"
    />
    <el-button
      @click="gooo()"
      v-if="kodnidavri == true"
      type="primary"
      class="mt-2"
      >Enter</el-button
    >
  </el-dialog>
</template>
<script setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { useUserStore } from "../../stores/user";
import { ElNotification } from "element-plus";
import router from "../../router";

const number = ref("");
const kod = ref("");
let logininfo = ref();
const userStore = useUserStore();
const dialogVisible = ref(false);
const kodnidavri = ref(false);

const changeDialogValue = (name) => {
  const userid = localStorage.getItem("userid");
  if (!userid) dialogVisible.value = true;
  else router.push({ name: name });
};

const handleClose = (done) => {
  ElMessageBox.confirm("Do you want to close this dialog ?")
    .then(() => {
      done();
    })
    .catch((error) => {
      console.log(error);
    });
};

const send_sms = async () => {
  logininfo.value = await userStore.logInUser({
    phone_number: `+998${number.value}`,
  });
  kodnidavri.value = true;
};

const gooo = async () => {
  await userStore.verifyOtp({
    phone_number: `+998${number.value}`,
    verification_key: logininfo.value.otpinfo.details,
    otp: kod.value,
    userId: logininfo.value.user.id,
  });
  localStorage.setItem("userid", logininfo.value.user.id);
  localStorage.setItem("refreshtoken", logininfo.value.tokens.refreshToken);
  ElNotification({
    title: "Successfully",
    message: ("i", { style: "color: teal" }, "You have successfully logged in"),
    type: "success",
  });

  setTimeout(() => {
    location.reload();
  }, 2000);
};
</script>

<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
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
