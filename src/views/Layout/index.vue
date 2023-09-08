<template>
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
</script>

<style scoped lang="scss"></style>
