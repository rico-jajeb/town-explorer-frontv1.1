// src/lib/axios.ts
import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API, // http://localhost:8000
  withCredentials: true, // must include cookies
})

// Interceptor to add XSRF-TOKEN from cookie to every request
API.interceptors.request.use((config) => {
  const xsrfCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1]

  if (xsrfCookie && config.headers) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(xsrfCookie)
  }

  return config
})

export default API
