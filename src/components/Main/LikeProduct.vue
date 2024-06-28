<template>
  <div id="blog" class="flex flex-col w-[20%]">
    <img
      :src="props.alldata?.product?.image[0]?.img_url"
      alt="Blog img"
      class="h-[100%]"
      @click="goSingleProduct()"
    />

    <div id="hover">
      <el-button
        type="warning"
        plain
        style="padding: 15px 50px; border-radius: 2px"
        @click="addToCart(props.alldata.product.id)"
        >Add to cart</el-button
      >

      <div class="flex p-5 gap-3">
        <h3
          @click="share()"
          class="flex items-center gap-2 text-[16px] cursor-pointer"
        >
          <i class="fa-solid fa-share-nodes"></i> Share
        </h3>
        <h3
          @click="compare()"
          class="flex items-center gap-2 text-[16px] cursor-pointer"
        >
          <i class="fa-solid fa-code-compare"></i> Compare
        </h3>
        <h3
          v-if="isProductLiked.qonday == null"
          @click="like()"
          class="flex items-center gap-2 text-[16px] cursor-pointer"
        >
          <i class="fa-regular fa-heart"></i> Like
        </h3>
        <h3
          v-if="isProductLiked.qonday != null"
          @click="like()"
          class="flex items-center gap-2 text-[16px] cursor-pointer"
        >
          <i class="fa-solid fa-heart"></i> Like
        </h3>
      </div>
      <a :href="`http://furniro.uz/product/${props.alldata.product.id}`">
        <el-button
          type="warning"
          plain
          style="padding: 15px 50px; border-radius: 2px"
          >More info</el-button
        >
      </a>
    </div>

    <div class="flex flex-col p-3 bg-[#F4F5F7] gap-2">
      <h1 class="font-['Poppins'] text-[24px] font-semibold text-[#3A3A3A]">
        {{ props.alldata.product?.name }}
      </h1>
      <h3 class="font-['Poppins'] text-[16px] font-medium text-[#898989]">
        {{ props.alldata.product?.category?.name }}
      </h3>
      <h2 class="font-['Poppins'] text-[20px] font-semibold text-[#3A3A3A]">
        {{ formatNumber(props.alldata?.product?.price) }}$
      </h2>
    </div>
  </div>

  <!-- Dialog -->
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
import router from "../../router";
import { ElNotification } from "element-plus";
import { useCartStore } from "../../stores/cart";
import { useLikesStore } from "../../stores/likes";
import { ref, reactive } from "vue";
import { ElMessageBox } from "element-plus";
import { useUserStore } from "../../stores/user";
import { ElMessage } from "element-plus";

const likeStore = useLikesStore();
const cartStore = useCartStore();
function formatNumber(number) {
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
}
const props = defineProps({
  alldata: {
    type: Object,
  },
});

const number = ref("");
const kod = ref("");
let logininfo = ref();
const userStore = useUserStore();
const dialogVisible = ref(false);
const kodnidavri = ref(false);

const addToCart = async (pid) => {
  const userid = localStorage.getItem("userid");
  if (!userid) dialogVisible.value = true;
  else {
    const payload = {
      user_id: userid,
      product_id: pid,
      quantity: 1,
    };
    await cartStore.addToCart(payload);
    ElNotification({
      title: "Product added to cart",
      message: props.alldata.product.name,
      type: "success",
    });
  }
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

const goSingleProduct = () => {
  router.push(`/product/${props.alldata.product.id}`);
};

// Share
const share = () => {
  const textToCopy = `http://furniro.uz/product/${props.alldata.product.id}`;
  navigator.clipboard.writeText(textToCopy).catch((error) => {
    console.error("Error copying text:", error);
  });
  ElMessage("Link copied to clipboard.");
};

// Like
let isProductLiked = reactive({
  qonday: "Boolean",
});
isProductLiked.qonday = localStorage.getItem(props.alldata.product.name);

const like = async () => {
  const userid = localStorage.getItem("userid");
  if (!userid) dialogVisible.value = true;
  else {
    if (!isProductLiked.qonday) {
      localStorage.setItem(props.alldata.name, "Yeah");
      isProductLiked.qonday = "true";
      await likeStore.createLike({
        user_id: Number(localStorage.getItem("userid")),
        product_id: props.alldata.product.id,
      });
    } else {
      localStorage.removeItem(props.alldata.product.name);
      isProductLiked.qonday = null;
      await likeStore.deleteLikeByIds({
        user_id: Number(localStorage.getItem("userid")),
        product_id: props.alldata.product.id,
      });
      location.reload();
    }
  }
};

// Compare
const compare = () => {
  router.push(`/comparison/${props.alldata.product.id}`);
};
</script>

<style lang="scss" scoped>
#blog {
  position: relative;
}
#blog:hover #hover {
  opacity: 0.9;
  transition: all ease-in-out 0.1s;
}
#hover {
  position: absolute;
  display: flex;
  bottom: 0;
  top: 0;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #3a3a3a;
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  font-size: 25px;
}

@media screen and (max-width: 1000px) {
  #blog {
    width: 30%;
  }
}

@media screen and (max-width: 850px) {
  #blog {
    width: 40%;
  }
}

@media screen and (max-width: 650px) {
  #blog {
    width: 70%;
  }
}

@media screen and (max-width: 450px) {
  #blog {
    width: 80%;
  }
}

@media screen and (max-width: 400px) {
  #blog {
    width: 100%;
  }
}
</style>
