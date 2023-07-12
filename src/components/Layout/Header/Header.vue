<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-11 20:57:21
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-12 20:36:34
 * @Description: 
 * @FilePath: \v3_ts_shop\src\components\Layout\Header\Header.vue
-->
<template>
  <header class="app-header">
    <div class="container-header">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
      <header-nav></header-nav>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import HeaderNav from "@/components/HeaderNav/index.vue";
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #fff;
  .container-header {
    display: flex;
    align-items: center;

    .logo {
      width: 200px;
      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url(../../../assets/images/logo.png) no-repeat center 18px /
          contain;
      }
    }

    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
      }
    }
    .cart {
      width: 50px;
      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;
        .icon-cart {
          font-size: 22px;
        }
        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $--help-color;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
}
</style>
