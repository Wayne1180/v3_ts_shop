/*
 * @Author: 徐腾龙
 * @Date: 2023-07-16 20:53:40
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-18 21:28:05
 * @Description: 
 * @FilePath: \v3_ts_shop\src\components\Library\index.ts
 */
import Skeleton from './skeleton.vue'
import Carousel from './carousel.vue'
import More from './more.vue'

export default {
    install(app: any) {
        app.component('Skeleton', Skeleton)
        app.component('Carousel', Carousel)
        app.component('More', More)
    }
}