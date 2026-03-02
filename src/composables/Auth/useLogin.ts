import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth/useAuth'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'

export function useLogin() {
  const router = useRouter()
  const toast = useToast()
  const auth = useAuthStore()

  const email = ref('')
  const password = ref('')
  const loading = ref(false)

  const loginUser = async () => {
    loading.value = true

    try {
      await auth.login(email.value, password.value)

      toast.add({
        severity: 'success',
        summary: 'Welcome Back!',
        detail: `Logged in as, ${email.value} `,
        life: 20000, // duration in ms
      })
      router.push('/')
    } catch (err) {
      toast.add({
        severity: 'error',
        summary: 'Sign In Failed',
        detail: 'Invalid credentials',
        life: 20000,
      })
    } finally {
      loading.value = false
    }
  }

  return {
    email,
    password,
    loading,
    loginUser,
  }
}
