<template>
  <button @click="handleLogout" class="bg-red-600 text-white px-4 py-2 rounded-md">Sign Out</button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/useAuth'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

const auth = useAuthStore()
const router = useRouter()
const toast = useToast()
async function handleLogout() {
  try {
    await auth.logout() // call the logout action from your store
    toast.add({
      severity: 'success',
      summary: 'Logout',
      detail: `Logout Successfully`,
      life: 10000, // duration in ms
    })
    setTimeout(() => {
      router.push('/login')
    }, 80)
  } catch (err) {
    console.error('Logout failed', err)
    toast.add({
      severity: 'error',
      summary: 'Logout',
      detail: `Logout Failed`,
      life: 10000, // duration in ms
    })
  }
}
</script>
