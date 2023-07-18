<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-18 21:29:10
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 22:21:17
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\home\components\panel.vue
-->
<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <h3>{{ title }}<small>{{ subTitle }}</small></h3>
                <slot name="right"></slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.home-panel {
    background-color: #fff;
    .head {
        padding: 40px 0;
        display: flex;
        align-items: flex-end;
        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;
            small {
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}
</style>