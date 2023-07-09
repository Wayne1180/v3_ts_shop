/*
 * @Author: 徐腾龙
 * @Date: 2023-07-09 21:32:19
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-09 22:11:34
 * @Description: 
 * @FilePath: \v3_ts_shop\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index.vue')

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {path: '/', component: Home}
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router