<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-09 21:24:05
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-12 22:08:08
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\Layout.vue
-->
<template>
    <top-nav></top-nav>
    <layout-header></layout-header>
    <main>
        <!-- 二级路由 -->
        <router-view></router-view>
    </main>
    <layout-footer></layout-footer>
</template>

<script setup lang="ts">
import TopNav from '@/components/Layout/TopNav/TopNav.vue'
import LayoutHeader from '@/components/Layout/Header/Header.vue'
import LayoutFooter from '@/components/Layout/Footer/Footer.vue'
// 获取category的store对象
</script>

<style scoped>

</style>