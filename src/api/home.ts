/*
 * @Author: 徐腾龙
 * @Date: 2023-07-16 20:13:18
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 21:41:38
 * @Description: 
 * @FilePath: \v3_ts_shop\src\api\home.ts
 */
import request from "@/utils/request";

export const findBrand = (limit: any) => {
  return request("/home/brand", "get", { limit });
};

// 获取广告图
export const findBanner = () => {
  return request('/home/banner', 'get', {})
}

export const findNew = () => {
  return request('home/new', 'get', {})
}