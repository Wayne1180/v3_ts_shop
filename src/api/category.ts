/*
 * @Author: 徐腾龙
 * @Date: 2023-07-12 21:53:15
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-12 21:53:30
 * @Description: 
 * @FilePath: \v3_ts_shop\src\api\category.ts
 */
import request from "@/utils/request";

// 获取首页头部分类数据
export const findAllCategory = () => {
  return request("/home/category/head", "get", {});
};
