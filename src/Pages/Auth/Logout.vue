<template>
  <button @click="handleLogout" class="bg-red-600 text-white px-4 py-2 rounded-md">Sign Out</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/useAuth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

async function handleLogout() {
  try {
    await auth.logout() // call the logout action from your store
    router.push('/login') // redirect to login page after logout
  } catch (err) {
    console.error('Logout failed', err)
  }
}
</script>
