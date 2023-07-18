/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 17:00:38
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 20:55:07
 * @Description: 
 * @FilePath: \v3_ts_shop\src\main.ts
 */
import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import ui from './components/Library/index'

import "normalize.css";
import '@/assets/styles/common.less'
// import '@/assets/styles/variables.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Antd)
app.use(ui)
app.mount('#app')
