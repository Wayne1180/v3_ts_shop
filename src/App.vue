<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-07 20:24:25
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-08 00:11:12
 * @Description: 
 * @FilePath: \v3_ts_shop\src\App.vue
-->
<template>
  <div>
    {{ store.userInfo }}
  </div>
</template>

<script lang="ts">
import useUserStore from "./store/modules/user";
export default {
  setup() {
    const store = useUserStore();
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
