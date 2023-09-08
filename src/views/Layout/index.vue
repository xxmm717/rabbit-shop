<template>

  <!-- 吸顶导航组件 -->
  <LayoutFixed/>
  <!-- layout组件 -->
  <LayoutNav />
  <!-- layoutHead组件 -->
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <!-- layouFooter组件 -->
  <LayoutFooter />


</template>

<script setup >
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayouFixed.vue'
// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

onMounted( () => {
  useCategoryStore().getCategoryList()
} )
</script>

<style scoped lang="scss"></style>
