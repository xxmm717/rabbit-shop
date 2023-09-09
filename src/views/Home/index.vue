<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
  <HomeProduct />
 
</template>

<script setup>
import HomeCategory from '@/views/Home/components/HomeCategory.vue'
import HomeBanner from '@/views/Home/components/HomeBanner.vue'
import HomeProduct from '@/views/Home/components/HomeProduct.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeNew.vue'
</script>