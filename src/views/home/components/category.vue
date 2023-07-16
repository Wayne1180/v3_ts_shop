<!--
 * @Author: 徐腾龙
 * @Date: 2023-07-16 17:09:15
 * @LastEditors: 徐腾龙
 * @LastEditTime: 2023-07-16 21:05:05
 * @Description: 
 * @FilePath: \v3_ts_shop\src\views\home\components\category.vue
-->
<template>
  <div class="container-category" @mouseleave="categoryId = null">
    <ul class="menu">
      <li
        :class="{ active: categoryId === i.id }"
        v-for="i in menuList"
        :key="i.id"
        @mouseenter="categoryId = i.id"
      >
        <RouterLink :to="`/category/${i.id}`">{{ i.name }}</RouterLink>
        <template v-if="i.children">
          <RouterLink
            v-for="sub in i.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`"
          >
            {{ sub.name }}
          </RouterLink>
        </template>
        <span v-else>
            <skeleton width="60px" height="18px" style="margin-right:5px" bg="rgba(255,255,255,0.2)"></skeleton>
            <skeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)"></skeleton>
          </span>
      </li>
    </ul>
    <div class="layer">
      <!-- 商品 -->
      <h4 v-if="currCategory">
        {{ currCategory.id === "brand" ? "品牌" : "分类" }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <ul
        v-if="currCategory && currCategory.goods && currCategory.goods.length"
      >
        <li v-for="item in currCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="currCategory && currCategory.brands">
        <li class="brand" v-for="brand in currCategory.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ brand.place }}
              </p>
              <p class="name ellipsis">{{ brand.name }}</p>
              <p class="desc ellipsis-2">{{ brand.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { findBrand } from "@/api/home";
import useCateStore from "@/store/modules/category";
import { Category } from "@/store/modules/types/type";
import { reactive, ref, computed, watch } from "vue";
const brand = reactive({
  id: "brand",
  name: "品牌",
  children: [{ id: "brand-children", name: "品牌推荐" }],
  brands: [],
});
findBrand().then((data: any) => {
  brand.brands = data.result;
});
const cateStore = useCateStore();
const menuList = computed(() => {
  const list = cateStore.list.map((item) => {
    return {
      id: item.id,
      name: item.name,
      children: item.children && item.children.slice(0, 2),
      goods: item.goods,
    };
  });
  list.push(brand);
  return list;
});
// 获取当前分类逻辑
const categoryId = ref(null);
const currCategory = computed(() => {
  return menuList.value.find((item: Category) => {
    return item.id === categoryId.value;
  });
});
watch(categoryId, (newValue: string, oldValue: string) => {
  console.log(newValue, oldValue);
  console.log(currCategory);
});
</script>

<style lang="scss" scoped>
.container-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    //menulist 组件的子元素是一个列表元素，每个元素是一个对象，
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,
      &.active {
        background: $--primary-color;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }

  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;

    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: $--primary-color;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  li.brand {
    height: 180px;
    a {
      align-items: flex-start;
      img {
        width: 120px;
        height: 160px;
      }
      .info {
        p {
          margin-top: 8px;
        }
        .place {
          color: #999;
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
.container-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
