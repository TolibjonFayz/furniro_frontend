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
            <el-alert
              v-if="isFirstName"
              title="Please input your firstname"
              type="warning"
            />
          </el-form-item>
          <el-form-item label="Last name">
            <el-input v-model="forms.lastname" />
            <el-alert
              v-if="isLastName"
              title="Please input your lastname"
              type="warning"
            />
          </el-form-item>
        </div>
        <el-form-item label="Country/Region">
          <el-input v-model="forms.region" />
          <el-alert
            v-if="isRegion"
            title="Please input region"
            type="warning"
          />
        </el-form-item>
        <el-form-item label="Street address">
          <el-input v-model="forms.srteet" />
          <el-alert
            v-if="isSrteet"
            title="Please input street"
            type="warning"
          />
        </el-form-item>
        <el-form-item label="Town / City">
          <el-input v-model="forms.city" />
          <el-alert v-if="isCity" title="Please input city" type="warning" />
        </el-form-item>
        <el-form-item label="Province">
          <el-input v-model="forms.province" />
          <el-alert
            v-if="isProvince"
            title="Please input province"
            type="warning"
          />
        </el-form-item>
        <el-form-item label="ZIP code">
          <el-input v-model="forms.zipcode" />
          <el-alert
            v-if="isZipcode"
            title="Please input zipcode"
            type="warning"
          />
        </el-form-item>
        <el-form-item label="Phone">
          <el-input v-model="forms.phone" />
          <el-alert v-if="isPhone" title="Please input phone" type="warning" />
        </el-form-item>
        <el-form-item label="Email address">
          <el-input v-model="forms.email" />
          <el-alert v-if="isEmail" title="Please input email" type="warning" />
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
      <div v-loading="loading" class="flex flex-col gap-5">
        <div
          v-for="(item, index) in cartStore?.cart"
          :key="index"
          class="flex justify-between"
        >
          <h1 class="font-['Poppins'] text-[#9F9F9F]">
            {{ item?.product?.name }} * {{ item?.quantity }}
          </h1>
          <h1 class="font-['Poppins']">
            {{ formatNumber(item?.product?.price*item?.quantity) }} $
          </h1>
        </div>
        <div id="total" class="flex justify-between pb-8">
          <h1 class="font-['Poppins']">Total</h1>
          <h1 class="font-['Poppins'] text-[24px] font-bold text-[#B88E2F]">
            {{ formatNumber(totalSum) }}$
          </h1>
        </div>
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
            <el-alert
              v-if="isCard"
              title="Please input your card number"
              type="warning"
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
          v-if="!loadingbtn"
          type="warning"
          @click="go()"
          class="w-[200px]"
          style="padding-top: 20px; padding-bottom: 20px; border-radius: 10px"
          >Place order</el-button
        >
        <el-button
          v-if="loadingbtn"
          class="w-[200px]"
          type="warning"
          style="padding-top: 20px; padding-bottom: 20px; border-radius: 10px"
          loading
          >Please wait...</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import { ElNotification } from "element-plus";
import router from "../../router";
import { useCartStore } from "../../stores/cart";
import { useUserStore } from "../../stores/user";

const userStore = useUserStore();
const cartStore = useCartStore();
const radio = ref(1);
const loading = ref(false);

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

const loadingbtn = ref(false);

const isFirstName = ref(false);
const isLastName = ref(false);
const isRegion = ref(false);
const isSrteet = ref(false);
const isCity = ref(false);
const isProvince = ref(false);
const isZipcode = ref(false);
const isPhone = ref(false);
const isEmail = ref(false);
const isCard = ref(false);

const go = async () => {
  if (!forms.firstname) {
    isFirstName.value = true;
  } else if (!forms.lastname) {
    isLastName.value = true;
    isFirstName.value = false;
  } else if (!forms.region) {
    isRegion.value = true;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (!forms.srteet) {
    isSrteet.value = true;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (!forms.city) {
    isCity.value = true;
    isSrteet.value = false;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (!forms.province) {
    isProvince.value = true;
    isCity.value = false;
    isSrteet.value = false;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (!forms.zipcode) {
    isZipcode.value = true;
    isProvince.value = false;
    isCity.value = false;
    isSrteet.value = false;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (!forms.phone) {
    isPhone.value = true;
    isZipcode.value = false;
    isProvince.value = false;
    isCity.value = false;
    isSrteet.value = false;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (!forms.email) {
    isEmail.value = true;
    isPhone.value = false;
    isZipcode.value = false;
    isProvince.value = false;
    isCity.value = false;
    isSrteet.value = false;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else if (radio.value == 1 && !forms.card) {
    isCard.value = true;
    isEmail.value = false;
    isPhone.value = false;
    isZipcode.value = false;
    isProvince.value = false;
    isCity.value = false;
    isSrteet.value = false;
    isRegion.value = false;
    isLastName.value = false;
    isFirstName.value = false;
  } else {
    try {
      loadingbtn.value = true;
      const payload = {
        userinfo: forms,
        products: cartStore.cart,
      };
      await userStore.sendMessageToUser(payload);
      await cartStore.deleteCartByUserId(
        Number(localStorage.getItem("userid"))
      );
      loadingbtn.value = false;
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
      }, 2000);
    } catch (error) {
      console.log(error);
      ElNotification({
        title: "Error",
        message:
          ("i",
          { style: "color: teal" },
          "Something went wrong. Please contact to admintrators"),
        type: "error",
      });
    }
  }
};

// Calculate total summ
const totalSum = computed(() => {
  let sum = 0;
  cartStore.cart.forEach((item) => {
    sum += item.product.price * item.quantity;
  });
  return sum;
});

function formatNumber(number) {
  try {
    const numberStr = number.toString();
    if (numberStr.length < 4) {
      return numberStr;
    }

    let formattedNumber = "";
    let counter = 0;
    for (const digit of numberStr.split("").reverse()) {
      formattedNumber = digit + formattedNumber;
      counter += 1;
      if (counter % 3 === 0 && counter !== numberStr.length) {
        formattedNumber = "," + formattedNumber;
      }
    }
    return formattedNumber;
  } catch (error) {}
}

onMounted(async () => {
  loading.value = true;
  await cartStore.getUserCart(Number(localStorage.getItem("userid")));
  loading.value = false;
});
</script>

<style lang="scss" scoped>
#total {
  border-bottom: 1px solid #d9d9d9;
}
.el-alert {
  margin: 10px 0 0;
}
.el-alert:first-child {
  margin: 0;
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
