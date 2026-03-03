import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth/useAuth'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'

export function useLogout() {
  const auth = useAuthStore()
  const router = useRouter()
  const toast = useToast()
  const loading = ref(false)

  async function handleLogout() {
    loading.value = true
    try {
      await auth.logout() // call the logout action from your store
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: `Logout Successfully`,
        life: 20000, // duration in ms
      })
      setTimeout(() => {
        router.push('/login')
      }, 80)
    } catch (err) {
      console.error('Logout failed', err)
      toast.add({
        severity: 'error',
        summary: 'Logout Failed',
        detail: `Something went wrong`,
        life: 20000, // duration in ms
      })
    } finally {
      loading.value = false
    }
  }
  return {
    handleLogout,
    loading,
  }
}
