<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-09 21:31:16
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 22:11:22
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\home\index.vue
-->
<template>
    <div class="home-entry">
      <div class="container">
        <category></category>
        <banner></banner>
      </div>
    </div>
    <!-- 新鲜好物 -->
    <home-new></home-new>
</template>

<script setup lang="ts">
import category from './components/category.vue'
import banner from './components/banner.vue'
import homeNew from './components/home-new.vue'
</script>

<style>

</style>