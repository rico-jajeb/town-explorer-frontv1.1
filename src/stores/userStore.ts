// stores/userStore.ts
import { defineStore } from 'pinia'
import { UserService } from '@/service/users/userService'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as any[],
    usersLoaded: false,
    loading: false,
  }),

  actions: {
    async fetchUsers(force = false) {
      if (this.usersLoaded && !force) return

      // Check sessionStorage
      const cached = sessionStorage.getItem('users')
      if (cached && !force) {
        const parsed = JSON.parse(cached)
        // Optional TTL check
        const now = Date.now()
        if (parsed.timestamp && now - parsed.timestamp < 5 * 60 * 1000) {
          this.users = parsed.data
          this.usersLoaded = true
          return
        }
      }

      // Fetch from API if no valid cache
      this.loading = true
      const data = await UserService.getCustomersSmall()
      this.users = data ?? []
      this.usersLoaded = true
      this.loading = false

      // Save to sessionStorage
      sessionStorage.setItem('users', JSON.stringify({ data: this.users, timestamp: Date.now() }))
    },
  },
})
