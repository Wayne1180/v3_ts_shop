<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-07 20:24:25
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-14 12:27:16
 * @Description: 
 * @FilePath: \v3_ts_shop\src\App.vue
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import numeral from 'numeral'
let num = 3.1465926
let numeralNum = numeral(num).format('0.00')
console.log("🚀 ~ file: App.vue:19 ~ numeralNum:", numeralNum)
let roundNum = Math.round(num * 100) / 100
console.log("🚀 ~ file: App.vue:21 ~ roundNum:", roundNum)
let fixedNum = num.toFixed(2)
console.log("🚀 ~ file: App.vue:23 ~ fixedNum:", fixedNum)

</script>

<style lang="scss" scoped>

</style>
