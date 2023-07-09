/*
 * @Author: 徐腾龙
 * @Date: 2023-07-09 21:32:19
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-09 21:37:03
 * @Description: 
 * @FilePath: \v3_ts_shop\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import('@/views/Layout')
const Home = () => import('@/views/home/index')

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