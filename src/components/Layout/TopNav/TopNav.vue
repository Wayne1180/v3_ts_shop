<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-10 20:39:33
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-11 20:54:42
 * @Description: 
 * @FilePath: \v3_ts_shop\src\components\Layout\TopNav.vue
-->
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ profile.nickname }}</a></li>
        <li><a href="javascript:;">退出登录</a></li>
        <li><a href="javascript:;">请先登录</a></li>
        <li><a href="javascript:;">免费注册</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li><a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import useUserStore from '@/store/modules/user';
export default {
  setup () {
    const userStore = useUserStore()
    const profile = userStore?.userInfo
    return {profile}
  }
}
</script>

<style lang="scss" scoped>
.app-topnav {
    background-color: #333;
    ul {
        display: flex;
        height: 54px;
        justify-content: flex-end;
        align-items: center;
        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover{
                    color: $--primary-color;
                }
            }  
        }
    }
}
</style>