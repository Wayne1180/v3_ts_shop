/*
 * @Author: 徐腾龙
 * @Date: 2023-07-12 21:52:27
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 16:34:12
 * @Description:
 * @FilePath: \v3_ts_shop\src\store\modules\category.ts
 */
import { topCategory } from "@/api/constants";
import { findAllCategory } from "@/api/category";
import { ApiResponse, Category } from "./types/type";
import { defineStore } from "pinia";

const useCateStore = defineStore("Cate", {
  state: () => {
    return {
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      list: topCategory.map((i) => ({
        name: i,
        id: "",
        picture: "",
        goods: [],
        children: [],
        open: false,
      })),
    };
  },
  actions: {
    async getList() {
      try {
        const res = (await findAllCategory()) as unknown as ApiResponse;
        if (res.code === "1") {
          if (res.result && Array.isArray(res.result)) {
            this.list = res.result.map((i: any) => ({
              open: false,
              ...i,
            }));
          } else {
            console.error("Error: Invalid response result");
          }
        } else {
          console.error("Error:", res.msg);
        }
      } catch (error) {
        console.error(error);
      }
    },
    show(o: Category) {
      const item = this.list.find((item) => item.id === o.id);
      if (item) {
        item.open = true;
      }
    },
    hide(o: Category) {
      const item = this.list.find((item) => item.id === o.id);
      if (item) {
        item.open = false;
      }
    },
  },
});

export default useCateStore;
