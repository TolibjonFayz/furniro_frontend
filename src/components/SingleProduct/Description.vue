<template>
  <div id="main" class="mt-10 pt-10 mb-5 font-['Poppins']">
    <el-tabs v-model="activeName" class="demo-tabs flex items-center flex-col">
      <!-- Description -->
      <el-tab-pane
        label="Description"
        name="first"
        class="flex flex-col items-center"
        id="description"
      >
        <h1 class="w-[70%] mt-8 mb-8">
          {{ props.alldata.description }}
        </h1>
        <div class="flex w-[90%] gap-5">
          <img
            v-for="(item, index) in props.alldata.image"
            :key="index"
            :src="item.img_url"
            alt="Product img"
            class="w-[50%]"
          />
        </div>
      </el-tab-pane>

      <!-- Additional information -->
      <el-tab-pane
        label="Additional Information"
        name="second"
        class="flex justify-center flex-wrap gap-5 font-['Poppins']"
        id="additional_information"
        v-for="(item, index) in $props.alldata.additionalInformation"
        :key="index"
      >
        <div class="w-[35%]">
          <h1 class="text-[28px]">General</h1>
          <h2>Sales Package : {{ item.sales_package }}</h2>
          <h2>Model Number: {{ item.model_number }}</h2>
          <h2>Secondary Material : {{ item.secondary_material }}</h2>
          <h2>Configuration : {{ item.configuration }}</h2>
          <h2>Upholstery Material : {{ item.upholstery_material }}</h2>
          <h2>Upholstery Color : {{ item.upholstery_color }}</h2>
        </div>

        <div class="w-[35%]">
          <h1 class="text-[28px]">Product</h1>
          <h2>Filling Material : {{ item.filling_material }}</h2>
          <h2>Finish Type : {{ item.finish_type }}</h2>
          <h2>Maximum Load Capacity : {{ item.maximum_load_capacity }}</h2>
          <h2>Origin of Manufacture : {{ item.origin_of_manufacture }}</h2>
        </div>

        <div class="w-[35%]">
          <h1 class="text-[28px]">Dimensions</h1>
          <h2>Width : {{ item.width }}</h2>
          <h2>Height : {{ item.height }}</h2>
          <h2>Depth : {{ item.depth }}</h2>
          <h2>Weight : {{ item.weight }}</h2>
        </div>

        <div class="w-[35%]">
          <h1 class="text-[28px]">Warranty</h1>
          <h2>Warranty Summary : {{ item.warranty_summary }}</h2>
          <h2>Warranty Service Type : {{ item.warranty_service_type }}</h2>
          <h2>Domestic Warranty : {{ item.domestic_warranty }}</h2>
        </div>
      </el-tab-pane>

      <!-- Reviews -->
      <el-tab-pane
        :label="`Reviews [${reviewStore.productR?.length}]`"
        name="third"
        class="flex flex-col"
        id="reviews"
      >
        <div class="flex flex-col">
          <div
            v-if="reviewStore.productR"
            v-for="(item, index) in reviewStore.productR"
            :key="index"
            class="mb-8"
          >
            <h2>{{ item?.user?.first_name }}</h2>
            <div class="flex items-center">
              <el-rate v-model="item.rate" allow-half disabled />
              <h1>{{ dateEdit(item.createdAt) }}</h1>
            </div>
            <h3>
              {{ item.review }}
            </h3>
          </div>
          <el-empty
            v-if="!reviewStore.productR.length > 0"
            description="There are no comments yet"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useReviewsStore } from "../../stores/reviews";

const reviewStore = useReviewsStore();
const activeName = ref("first");

const dateEdit = (date) => {
  date = date.slice(0, 10);
  return date;
};
const props = defineProps({
  alldata: {
    type: Object,
  },
});

onMounted(async () => {
  setTimeout(async () => {
    await reviewStore.getProductReviews(props.alldata.id);
  }, 5000);
});
</script>

<style lang="scss" scoped>
#main {
  border-top: 1px solid #d9d9d9;
}

#reviewc {
  border-bottom: 1px solid #d9d9d9;
}
.demo-tabs .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

@media screen and (max-width: 500px) {
  #description {
    h1 {
      width: 85%;
    }
    div {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
      }
    }
  }
  #additional_information {
    h1 {
      width: 85%;
    }
  }
  #reviews {
    div {
      width: 85%;
    }
  }
}
</style>
