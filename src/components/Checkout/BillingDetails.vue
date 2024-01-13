<template>
  <div id="main" class="flex mb-20">
    <!-- Left -->
    <div id="left" class="flex flex-col w-[50%] items-center mt-20">
      <h1 class="font-['Poppins'] text-[36px] font-semibold mb-7">
        Billing details
      </h1>
      <el-form
        label-position="top"
        label-width="100px"
        :model="forms"
        style="max-width: 460px"
        class="flex flex-col gap-2"
      >
        <div class="flex gap-10">
          <el-form-item label="First Name">
            <el-input v-model="forms.firstname" autofocus />
          </el-form-item>
          <el-form-item label="Last name">
            <el-input v-model="forms.lastname" />
          </el-form-item>
        </div>
        <el-form-item label="Country/Region">
          <el-input v-model="forms.region" />
        </el-form-item>
        <el-form-item label="Street address">
          <el-input v-model="forms.srteet" />
        </el-form-item>
        <el-form-item label="Town / City">
          <el-input v-model="forms.city" />
        </el-form-item>
        <el-form-item label="Province">
          <el-input v-model="forms.province" />
        </el-form-item>
        <el-form-item label="ZIP code">
          <el-input v-model="forms.zipcode" />
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="forms.phone" />
        </el-form-item>
        <el-form-item label="Email address">
          <el-input v-model="forms.email" />
        </el-form-item>
        <el-input
          v-model="forms.additional"
          placeholder="Additional information"
          type="textarea"
        />
      </el-form>
    </div>

    <!-- Right -->
    <div id="right" class="flex flex-col w-[45%] mt-20 gap-5">
      <div class="flex justify-between">
        <h1 class="font-['Poppins'] text-[24px] font-medium">Product</h1>
        <h2 class="font-['Poppins'] text-[24px] font-medium">Subtotal</h2>
      </div>
      <!-- Products -->
      <div class="flex justify-between">
        <h1 class="font-['Poppins'] text-[#9F9F9F]">Asgaard sofa x 1</h1>
        <h1 class="font-['Poppins']">2,000 $</h1>
      </div>
      <div id="total" class="flex justify-between pb-8">
        <h1 class="font-['Poppins']">Total</h1>
        <h1 class="font-['Poppins'] text-[24px] font-bold text-[#B88E2F]">
          2,000 $
        </h1>
      </div>

      <!-- Payment type -->
      <el-radio-group
        v-model="radio"
        class="font-['Poppins']"
        style="display: flex; flex-direction: column; align-items: start"
      >
        <el-radio :label="1">Direct Bank Transfer</el-radio>
        <el-form
          v-if="radio == 1"
          label-position="top"
          style="max-width: 600px"
          class="flex flex-col gap-2"
        >
          <el-form-item
            label="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
          >
            <el-input
              v-model="forms.card"
              placeholder="Enter your card number"
            />
          </el-form-item>
        </el-form>

        <el-radio :label="2">Cash On Delivery</el-radio>
      </el-radio-group>
      <h1 v-if="radio == 2" class="font-['Poppins'] mt-[-20px]">
        You will pay when you receive these products
      </h1>
      <h2 class="font-['Poppins'] font-light">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <b class="font-semibold">privacy policy.</b>
      </h2>
      <div class="flex justify-center">
        <el-button
          @click="go()"
          class="w-[200px]"
          style="padding-top: 20px; padding-bottom: 20px; border-radius: 10px"
          >Place order</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";
import router from "../../router";

const radio = ref(1);

const forms = reactive({
  firstname: "",
  lastname: "",
  region: "",
  srteet: "",
  city: "",
  province: "",
  zipcode: "",
  phone: "",
  email: "",
  additional: "",
  paymenttype: radio.value,
  card: "",
});

const go = () => {
  ElNotification({
    title: "Successfully",
    message:
      ("i",
      { style: "color: teal" },
      "Your order successfully received. Our admintrators will call you soon 🙂"),
    type: "success",
  });
  setTimeout(() => {
    router.push({ name: "home" });
  }, 5000);
};
</script>

<style lang="scss" scoped>
#total {
  border-bottom: 1px solid #d9d9d9;
}
@media screen and (max-width: 850px) {
  #main {
    flex-direction: column;
    #left {
      width: 100%;
    }
    #right {
      width: 100%;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
}

@media screen and (max-width: 450px) {
  #left {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
