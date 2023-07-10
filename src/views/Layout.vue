<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-09 21:24:05
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-10 20:53:29
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\Layout.vue
-->
<template>
    <AppTopnav />
    <header>头部</header>
    <main>
        <!-- 二级路由 -->
        <router-view></router-view>
    </main>
    <footer>底部</footer>
</template>

<script setup lang="ts">
import AppTopnav from '@/components/app-topnav.vue'

</script>

<style scoped>

</style>