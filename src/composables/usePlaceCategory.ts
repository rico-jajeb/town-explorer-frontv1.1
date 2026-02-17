import { ref, onMounted } from 'vue'
import axios from 'axios'

interface SystemInfo {
  name: string
  description: string
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const cachedSystemInfo = ref<SystemInfo | null>(null)
let lastFetched: number | null = null
let fetchPromise: Promise<void> | null = null

const CACHE_EXPIRATION = 30 * 60 * 1000

export function useSystemInfo() {
  const systemInfo = ref<SystemInfo | null>(cachedSystemInfo.value)
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  const fetchSystemInfo = async () => {
    const now = Date.now()
    const isCacheValid =
      cachedSystemInfo.value && lastFetched && now - lastFetched < CACHE_EXPIRATION

    if (isCacheValid) {
      systemInfo.value = cachedSystemInfo.value
      return
    }

    if (fetchPromise) {
      await fetchPromise
      systemInfo.value = cachedSystemInfo.value
      return
    }

    isLoading.value = true
    fetchPromise = axios
      .get(`${API_BASE_URL}/system-info`)
      .then((response) => {
        cachedSystemInfo.value = response.data
        lastFetched = Date.now()
        systemInfo.value = response.data
      })
      .catch((err) => {
        error.value = err as Error
      })
      .finally(() => {
        isLoading.value = false
        fetchPromise = null
      })

    await fetchPromise
  }

  onMounted(fetchSystemInfo)

  return { systemInfo, isLoading, error }
}
