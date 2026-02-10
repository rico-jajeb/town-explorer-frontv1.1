import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import HomeView from '../views/HomeView.vue'
import Home from '@/Pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/add-place',
      name: 'add-place',
      component: () => import('@/Pages/Admin/Place/addPlace.vue'),
    },
  ],
})

// Start NProgress before each route
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// Finish NProgress after each route
router.afterEach(() => {
  NProgress.done()
})

export default router
