<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-18 21:43:00
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 22:28:03
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\home\components\home-new.vue
-->
<template>
    <div class="home-new">
        <panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
            <template #right>
                <more path="/"></more>
            </template>
            <!-- 面板内容 -->
            <ul class="goods-list">
                <li v-for="item in goods" :key="item.id">
                    <router-link :to="`/product/${item.id}`">
                        <img :src="item.picture" alt="">
                        <p class="name ellipsis">{{ item.name }}</p>
                        <p class="price">&yen;{{ item.price }}</p>
                    </router-link>
                </li>
            </ul>
        </panel>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Panel from './panel.vue'
import { findNew } from '@/api/home';
interface Good {
    desc: string,
    id: string,
    name: string,
    orderNum: string,
    picture: string,
    price: string
}
const goods = ref<Good[]>([])
findNew().then((data: any)  => {
    goods.value = data.result as Good[]
})
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
        width: 306px;
        height: 406px;
        background: #f0f9f4;
        img {
            width: 306px;
            height: 306px;
        }
        p {
            font-size: 22px;
            padding: 12px 30px 0 30px;
            text-align: center;
        }
        .price {
            color: $--price-color;
        }

    }
}
</style>