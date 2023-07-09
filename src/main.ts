/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 17:00:38
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-09 21:56:26
 * @Description: 
 * @FilePath: \v3_ts_shop\src\main.ts
 */
import { createApp } from 'vue'
import pinia from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style.css'
import App from './App.vue'
import pinia from './store'

import 'normalize.css'
import '@/assets/styles/common.scss'

const app = createApp(App)
app.use(pinia)
app.use(Antd)
app.mount('#app')
