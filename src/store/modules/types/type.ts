/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 23:56:34
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-08 00:00:49
 * @Description: 
 * @FilePath: \v3_ts_shop\src\store\modules\types\type.ts
 */
// 定义用户信息的ts类型
export interface profile {
    id: string,
    avatar: string,
    nickname: string,
    account: string | number,
    mobile: string | number,
    token: string | null
}