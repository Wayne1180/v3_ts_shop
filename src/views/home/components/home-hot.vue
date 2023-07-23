<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-19 19:53:34
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-19 20:09:01
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\home\components\home-hot.vue
-->
<template>
    <div class="home-new">
        <panel title="人气推荐" sub-title="人气爆款 不容错过">
            <ul class="goods-list">
            <li v-for="item in goods" :key="item.id">
                <router-link to="/">
                    <img :src="item.picture" alt="">
                    <p class="title">{{ item.title }}</p>
                    <p class="alt">{{ item.alt }}</p>
                </router-link>
            </li>
        </ul>
        </panel>
        
    </div>
</template>

<script setup lang="ts">
import { findHot } from "@/api/home";
import { ref } from 'vue'
import Panel from './panel.vue'
interface Good {
    id: string,
    title: string,
    picture: string,
    alt: string
}
const goods = ref<Good[]>([])
findHot().then((data: any) => {
    goods.value = data.result as Good[]
    console.log("🚀 ~ file: home-hot.vue:29 ~ findHot ~ goods.value:", goods.value)
})

</script>

<style lang="scss" scoped>
.home-new {
    .goods-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 406px;
        li {
            width: 306px;
            height: 406px;
            background-color: #f0f9f4;
            img {
                width: 306px;
                height: 306px;
            }
            .title {
                font-size: 32px;
            }
            .alt {
                font-size: 16px;
            }
        }
    }

}
</style>