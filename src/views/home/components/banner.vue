<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-17 22:43:13
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 20:36:55
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\home\components\banner.vue
-->
<template>
  <div class="container-banner">
    <carousel :sliders="sliders" auto-play></carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { findBanner } from "@/api/home";
const sliders = ref([]);
findBanner().then((data: any) => {
  sliders.value = data.result;
});
</script>

<style lang="scss" scoped>
.container-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
.container-carousel {
  :deep .carousel-btn.prev {
    left: 270px;
  }
  :deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
