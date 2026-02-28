import { defineStore } from 'pinia'
import API from '@/lib/axios'

export interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  user: User | null
  initialized: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    initialized: false,
  }),

  actions: {
    // Always get a fresh CSRF token if missing
    async ensureCsrf() {
      const hasToken = document.cookie.includes('XSRF-TOKEN')
      if (!hasToken) {
        await API.get('/sanctum/csrf-cookie')
      }
    },

    async login(email: string, password: string) {
      try {
        // Step 1: Get fresh CSRF cookie
        await API.get('/sanctum/csrf-cookie')

        // Step 2: Login with credentials
        const res = await API.post('/api/login', { email, password })

        // Step 3: Fetch the authenticated user
        const userRes = await API.get('/api/user')
        this.user = userRes.data
      } catch (err: any) {
        this.user = null
        throw err // so your UI can show an error
      }
    },

    async fetchUser() {
      try {
        await this.ensureCsrf() // Ensure CSRF is present for auth check
        const res = await API.get('/api/user')
        this.user = res.data
      } catch {
        this.user = null
      } finally {
        this.initialized = true
      }
    },

    async logout() {
      await this.ensureCsrf()
      await API.post('/api/logout')
      this.user = null
    },
  },
})
