<template>
  <div id="main" class="flex flex-col items-center mt-5">
    <h1 class="font-['Poppins'] text-[32px] font-medium mb-5">
      My information
    </h1>
    <el-form
      v-loading="loading"
      label-position="top"
      style="max-width: 600px"
      class="flex gap-5"
    >
      <el-form-item label="First Name">
        <el-input v-model="forms.firstname" placeholder="First name" />
      </el-form-item>

      <el-form-item label="Last Name">
        <el-input v-model="forms.lastname" placeholder="Last name" />
      </el-form-item>

      <el-form-item label="Phone number">
        <el-input v-model="forms.phonenumber" placeholder="Phone number" />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="updateUserInfo()">Save</el-button>
    <div class="mt-5">
      <el-popconfirm
        width="220"
        confirm-button-text="Yes"
        cancel-button-text="No"
        :icon="InfoFilled"
        icon-color="#626AEF"
        @confirm="logOut()"
        title="Are you sure about this?"
      >
        <template #reference>
          <el-button>Log Out</el-button>
        </template>
      </el-popconfirm>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, watch } from "vue";
import { useUserStore } from "../../stores/user";
import { InfoFilled } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
import router from "../../router";

const userInfo = ref("");
const loading = ref(true);
const userStore = useUserStore();

const forms = reactive({
  firstname: "",
  lastname: "",
  phonenumber: "",
});

const updateUserInfo = async () => {
  const userid = localStorage.getItem("userid");
  const payload = {
    first_name: forms.firstname,
    last_name: forms.lastname,
    phone_number: forms.phonenumber,
  };
  loading.value = true;
  await userStore.updateUser(userid, payload);
  loading.value = false;
};

const logOut = async () => {
  localStorage.removeItem("userid");
  localStorage.removeItem("refreshtoken");
  ElNotification({
    title: "Successfully log out",
    message: "You are being redirected to main page",
    type: "success",
  });
  setTimeout(() => {
    router.push("/");
  }, 1000);
};

watch(userInfo, (value) => {
  if (value != "") {
    loading.value = false;
  }
});

onMounted(async () => {
  const userid = localStorage.getItem("userid");
  userInfo.value = await userStore.getUserById(Number(userid));
  forms.firstname = userInfo.value.first_name;
  forms.lastname = userInfo.value.last_name;
  forms.phonenumber = userInfo.value.phone_number;
});
</script>

<style lang="scss" scoped></style>
