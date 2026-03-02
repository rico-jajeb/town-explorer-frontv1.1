import { reactive, ref } from 'vue'
import API from '@/lib/axios'
import { RouterLink, RouterView } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
export function useRegister() {
  const router = useRouter()
  const toast = useToast()
  const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const loading = ref(false)
  const errors = ref({})

  async function register() {
    loading.value = true
    errors.value = {}

    try {
      await API.get('/sanctum/csrf-cookie')
      await API.post('/api/register', form)

      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: `Registered Successfully!`,
        life: 60000, // duration in ms
      })
      router.push('/login')
    } catch (err: any) {
      if (err.response?.data?.errors) {
        errors.value = err.response.data.errors
        toast.add({
          severity: 'error',
          summary: 'Failed',
          detail: `Registration Failed!`,
          life: 20000, // duration in ms
        })
      } else {
        toast.add({
          severity: 'error',
          summary: 'Failed',
          detail: `Registration Failed!`,
          life: 20000, // duration in ms
        })
      }
    } finally {
      loading.value = false
    }
  }

  return {
    form,
    loading,
    errors,
    register,
  }
}
