<template>
  <div class="flex flex-col">
    <Header />
    <ComparisionImage />
    <CompareInfo />
    <HighQuality />
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/Main/Header.vue";
import ComparisionImage from "../components/Comparison/ComparisionImage.vue";
import CompareInfo from "../components/Comparison/CompareInfo.vue";
import HighQuality from "../components/Shop/HighQuality.vue";
import Footer from "../components/Main/Footer.vue";
</script>

<style lang="scss" scoped></style>
