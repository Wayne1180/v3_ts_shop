/*
 * @Author: 徐腾龙
 * @Date: 2023-07-12 21:52:27
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 10:16:41
 * @Description: 
 * @FilePath: \v3_ts_shop\src\store\modules\category.ts
 */
import { topCategory } from "@/api/constants";
import { findAllCategory } from "@/api/category";
import { defineStore } from "pinia";

const useCateStore = defineStore("Cate", {
    state: () => {
        return {
            // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到
            // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
            list: topCategory.map(i => ({name: i}))
        }
    },
    actions: {
       async getList () {
        const { result } = await findAllCategory()
        this.list = result
       }
    }
})

export default useCateStore