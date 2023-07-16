/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 17:31:29
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 15:53:02
 * @Description: 
 * @FilePath: \v3_ts_shop\src\utils\request.ts
 */
import axios from 'axios'
import useUserStore from '../store/modules/user'
import router from '@/router'

// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    // axios的一些配置，baseURL timeout
    baseURL,
    timeout: 5000
})

const userStore = useUserStore();

instance.interceptors.request.use(config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token就在头部携带
    // 1. 获取用户信息对象
    if (userStore.userInfo?.token) {
        // 设置token
        config.headers.Authorization = `Bearer${userStore.userInfo?.token}`
    }
    return config
}, err => {
    return Promise.reject(err)
})

// res => res.data 取出data数据，将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
    // 401状态码，进入该函数
    if (err.response && err.response.status === 401) {
        // 1. 清空无效用户信息
        // 2. 跳转到登录页
        // 3. 跳转需要传参（当前路由地址）给登录页码
        userStore.setUser(null)
        // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute是ref响应式数据
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})

// 请求工具函数
export default (url: string, method: string, submitData: object) => {
    // 负责发请求：请求地址，请求方式，提交的数据
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get'? 'params': 'data']: submitData
    })
}