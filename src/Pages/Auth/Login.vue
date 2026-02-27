<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const form = reactive({
  email: '',
  password: '',
})

const loading = ref(false)
const error = ref('')
const user = ref(null)
const token = ref(null)

const API = import.meta.env.VITE_BACKEND_API

async function login() {
  loading.value = true
  error.value = ''

  try {
    const res = await axios.post(`${API}/api/login`, form)

    user.value = res.data.user
    token.value = res.data.token

    // attach token globally for future requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`

    alert('Login successful')
  } catch (err) {
    error.value = err.response?.data?.message || 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label class="block text-sm font-medium">Password</label>
          <input
            v-model="form.password"
            type="password"
            required
            class="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
          />
        </div>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

        <button
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>

      <div v-if="user" class="mt-6 text-sm text-green-600">Logged in as {{ user.email }}</div>
    </div>
  </div>
</template>
