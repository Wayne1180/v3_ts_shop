/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 17:31:29
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-07 18:04:26
 * @Description: 
 * @FilePath: \v3_ts_shop\src\utils\request.ts
 */
import axios from 'axios'
import router from '@/router'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    // axios的一些配置，baseURL timeout
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use(config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1. 获取用户信息对象
})