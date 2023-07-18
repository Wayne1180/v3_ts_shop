<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-16 10:53:45
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 11:19:18
 * @Description: 
 * @FilePath: \v3_ts_shop\src\components\HeaderSticky\index.vue
-->
<template>
  <div class="container-sticky" :class="{ show: y >= 78 }">
    <div class="content" v-show="y >= 78">
      <router-link class="content__logo" to="/"></router-link>
      <header-nav></header-nav>
      <div class="content__right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "../HeaderNav/index.vue";
import { useWindowScroll } from "@vueuse/core";
// import { onMounted, ref } from "vue";
// const y = ref(0)
// onMounted(() => {
//     window.onscroll = () => {
//         const scrollTop = document.documentElement.scrollTop;
//         y.value = scrollTop
//     }
// })
const { y } = useWindowScroll();
</script>

<style lang="scss" scoped>
.container-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
  .content {
    display: flex;
    align-items: center;
    &__logo {
      width: 200px;
      height: 80px;
      background: url(@/assets/images/logo.png) no-repeat right 2px;
      background-size: 160px auto;
    }
    &__right {
      width: 220px;
      display: flex;
      text-align: center;
      padding-left: 40px;
      border-left: 2px solid $--primary-color;
      a {
        a {
          width: 38px;
          margin-right: 40px;
          font-size: 16px;
          line-height: 1;
          &:hover {
            color: $--primary-color;
          }
        }
      }
    }
  }
}
</style>
