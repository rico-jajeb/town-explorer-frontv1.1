import { reactive, ref } from 'vue'
import axios from 'axios'

const BACKEND = import.meta.env.VITE_BACKEND_API
const API_URL = `${BACKEND}/api/add-category`

interface PlacePayload {
  name: string
  description: string
}

export function useAddCategory() {
  const form = reactive<PlacePayload>({
    name: '',
    description: '',
  })

  const loading = ref(false)
  const message = ref('')
  const error = ref('')

  async function submitCategory() {
    loading.value = true
    message.value = ''
    error.value = ''

    try {
      const res = await axios.post(API_URL, form)
      message.value = res.data.message

      form.name = ''
      form.description = ''
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Something went wrong while saving.'
    } finally {
      loading.value = false
    }
  }

  return {
    form,
    loading,
    message,
    error,
    submitCategory,
  }
}
