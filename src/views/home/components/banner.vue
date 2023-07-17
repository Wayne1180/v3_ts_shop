<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-17 22:43:13
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-17 23:26:55
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
.container-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
