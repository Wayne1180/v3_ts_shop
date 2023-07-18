<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-18 21:22:21
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 22:14:37
 * @Description: 
 * @FilePath: \v3_ts_shop\src\components\Library\more.vue
-->
<template>
    <router-link :to="path" class="more">
        <span>查看全部</span>
        <i class="iconfont icon-angle-right"></i>
    </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    path: {
        type: String,
        default: '/'
    }
})
</script>

<style lang="scss" scoped>
.more {
    margin-bottom: 2px;
    span {
        font-size: 16px;
        vertical-align: middle;
        margin-right: 4px;
        color: #999;
    }
    i {
        font-size: 14px;
        vertical-align: middle;
        position: relative;
        top: 2px;
        color: #ccc;
    }
    &:hover {
        span, i {
            color: $--primary-color;
        }
    }
}
</style>