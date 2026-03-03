import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
})

export default API
