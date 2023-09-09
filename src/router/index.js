import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: 'home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category',
          component: () => import('@/views/Catefgory/index.vue')
        }
      ]
    },
    // 登录
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    }
  ]
})

export default router
