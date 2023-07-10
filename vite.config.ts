/*
 * @Author: 徐腾龙
 * @Date: 2023-07-07 20:24:25
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-10 22:47:29
 * @Description: 
 * @FilePath: \v3_ts_shop\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/styles/variables.scss';`,
      },
    },
  },
});
