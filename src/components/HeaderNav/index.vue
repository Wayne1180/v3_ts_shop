<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-12 20:31:28
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 16:38:43
 * @Description: 
 * @FilePath: \v3_ts_shop\src\components\HeaderNav\index.vue
-->
<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li
      v-for="item in list"
      :key="item.id"
      @mouseenter="show(item)"
      @mouseleave="hide(item)"
    >
      <router-link :to="`/category/${item.id}`" @click="hide(item)">{{
        item.name
      }}</router-link>
      <div class="layer" :class="{open: item.open}">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <router-link :to="`/category/sub/${sub.id}`" @click="hide(item)">
              <img :src="sub.picture" />
              <p>{{ sub.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import useCateStore from "@/store/modules/category";
import { computed } from "vue";
import { Category } from "@/store/modules/types/type";
const cateStore = useCateStore();
cateStore.getList();
const list = computed(() => {
  return cateStore.list;
});
const show = (item: Category) => {
  cateStore.show(item);
};
const hide = (item: Category) => {
  cateStore.hide(item);
};
</script>

<style scoped lang="scss">
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: $--primary-color;
        border-bottom: 1px solid $--primary-color;
      }
    }
  }
}
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  &.open {
    height: 132px;
    opacity: 1;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: $--primary-color;
        }
      }
    }
  }
}
</style>
