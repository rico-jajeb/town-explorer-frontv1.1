import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import HomeView from '../views/HomeView.vue'
import Home from '@/Pages/Home.vue'
import AdminLayout from '@/Layout/AdminLayout.vue'
import AuthLayout from '@/Layout/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth/useAuth'

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
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/place',
          name: '/dashboard',
          component: () => import('@/Pages/Admin/Place/Place.vue'),
        },
        {
          path: '/add-place',
          name: '/add-place',
          component: () => import('@/Pages/Admin/Place/AddPlace.vue'),
        },
        {
          path: '/add-place-category',
          name: '/add-place-category',
          component: () => import('@/Pages/Admin/Place/CategoryPlace.vue'),
        },
        {
          path: '/user-management',
          name: '/user-management',
          component: () => import('@/Pages/Admin/UserManagement/UserManagement.vue'),
        },
      ],
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      children: [
        {
          path: '/register',
          name: 'register',
          component: () => import('../Pages/Auth/Register.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../Pages/Auth/Login.vue'),
        },
        {
          path: '/forgot',
          name: 'forgot',
          component: () => import('../Pages/Auth/ForgotPassword.vue'),
        },
      ],
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

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  // Wait until auth is initialized (fetchUser)
  // if (!auth.initialized) {
  //   await auth.fetchUser()
  // }

  // If route requires auth and user not logged in
  if (to.meta.requiresAuth && !auth.user) {
    // Can use window.location.href if outside setup, safe for SPA auth
    window.location.href = '/'
    return
  }

  next() // proceed if allowed
})

export default router
