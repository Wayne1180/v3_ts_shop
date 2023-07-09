/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 23:29:05
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-09 21:11:45
 * @Description: 
 * @FilePath: \v3_ts_shop\src\store\modules\user.ts
 */
import { defineStore } from "pinia";
import type { profile } from "./types/type";
// 创建用户小仓库
const useUserStore = defineStore("User", {
  // 小仓库存储数据地方
  state: () => {
    return {
      userInfo: {} as profile | {}
    };
  },
  getters: {},
  actions: {
    setUser (info: profile | {}) {
        this.userInfo = info || {}
    }
  }
});

// 对外暴露获取小仓库方法
export default useUserStore;
