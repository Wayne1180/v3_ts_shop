/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 17:00:38
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-07 17:55:16
 * @Description: 
 * @FilePath: \v3_ts_shop\src\main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style.css'
import ''
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(Antd)
app.mount('#app')
