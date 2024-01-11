<template>
  <div id="main" class="flex flex-col mt-20 mb-16">
    <div class="flex items-center text-center flex-col mb-16">
      <h1 class="font-['Poppins'] text-[36px] font-semibold">
        Get in touch with us
      </h1>
      <h2 class="font-['Poppins'] pi text-[#9F9F9F] w-[50%]">
        For more information about our product & services. Please feel free to
        drop us an email. Our staff always be there to help you out. Do not
        hesitate!
      </h2>
    </div>

    <div id="inside" class="flex justify-center">
      <!-- Left -->
      <div
        id="left"
        class="w-[30%] flex flex-col float-start items-start gap-10"
      >
        <div id="l-first" class="flex justify-center items-center gap-5">
          <i class="fa-solid fa-location-dot text-[22px]"></i>
          <div>
            <h1 class="font-['Poppins'] text-[24px] font-medium">Address</h1>
            <h2 class="font-['Poppins']">Chilanzar, Tashkent, Uzbekistan</h2>
          </div>
        </div>

        <div id="l-second" class="flex justify-center items-center gap-5">
          <i class="fa-solid fa-phone text-[22px]"></i>
          <div>
            <h1 class="font-['Poppins'] text-[24px] font-medium">Phone</h1>
            <h2 class="font-['Poppins']">Mobile: +998 90 815 04 **</h2>
          </div>
        </div>

        <div id="l-third" class="flex justify-center items-center gap-5">
          <i class="fa-solid fa-clock text-[22px]"></i>
          <div>
            <h1 class="font-['Poppins'] text-[24px] font-medium">
              Working Time
            </h1>
            <h2 class="font-['Poppins']">Monday-Friday: 9:00 - 22:00</h2>
            <h2 class="font-['Poppins']">Saturday-Sunday: 10:00 - 21:00</h2>
          </div>
        </div>
      </div>

      <!-- Right -->
      <div id="right" class="w-[30%] font-['Poppins']">
        <el-form
          label-position="top"
          style="max-width: 600px"
          class="flex flex-col gap-2"
          :model="forms"
        >
          <el-form-item label="Your name">
            <el-input v-model="forms.name" placeholder="Falonchi" />
          </el-form-item>

          <el-form-item label="Email address">
            <el-input v-model="forms.email" placeholder="falonchi@gmail.com" />
          </el-form-item>

          <el-form-item label="Subject">
            <el-input v-model="forms.subject" placeholder="This is optional" />
          </el-form-item>

          <el-form-item label="Message">
            <el-input
              type="textarea"
              v-model="forms.message"
              placeholder="Hi! i’d like to ask about..."
            />
          </el-form-item>
        </el-form>
        <el-button type="warning" @click="go()">Submit</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { ElNotification } from "element-plus";

const forms = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const go = () => {
  ElNotification({
    title: "We received your message",
    message: "Our adminstration will answer you soon 🙂",
    type: "success",
  });
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
  #left {
    width: 45%;
  }
  #right {
    width: 45%;
  }
}

@media screen and (max-width: 650px) {
  .pi {
    width: 80%;
  }
  #inside {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    #left {
      width: 80%;
    }
    #right {
      width: 80%;
    }
  }
}
</style>
