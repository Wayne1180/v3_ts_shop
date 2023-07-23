/*
 * @Author: 徐腾龙
 * @Date: 2023-07-19 21:14:55
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-19 21:19:18
 * @Description: 
 * @FilePath: \v3_ts_shop\src\hooks\index.ts
 */
// hooks封装逻辑，提供响应式数据
import { useIntersectionObserver } from "@vueuse/core";
import {ref} from 'vue'

// 数据懒加载函数
export const useLazyData = (apiFn: any) => {
    const target = ref(null)
    const result = ref([])
    const { stop } = useIntersectionObserver(
        target,
        ([{isIntersecting}], observerElement) => {
            if (isIntersecting) {
                stop()
                // 调用API获取数据
                apiFn().then((data: any) => {
                    result.value = data.result
                })
            }
        }
    )
    // 返回->数据（dom，后台数据）
    return {target, result}
}