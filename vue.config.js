/*
 * @Author: 徐腾龙
 * @Date: 2023-07-09 21:52:16
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-10 22:49:46
 * @Description: 
 * @FilePath: \v3_ts_shop\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // path.join(__dirname, './src/assets/styles/variables.scss'),
        path.join(__dirname, './src/assets/styles/mixins.scss')
      ]
    }
  }
})
// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         additionalData: `@import '@/assets/styles/variables.scss;'`, 
//       },
//     },
//   },
// };

