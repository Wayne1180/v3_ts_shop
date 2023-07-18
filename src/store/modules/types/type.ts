/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 23:56:34
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 16:27:07
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

export interface ApiResponse {
    code: string,
    msg: string,
    result?: Array<object>
}

export interface Category {
    id: string,
    name: string,
    picture: string,
    goods: Array<object>,
    children: Array<object>
    open?: boolean
}