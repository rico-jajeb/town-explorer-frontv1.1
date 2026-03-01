<template>
  <form @submit.prevent="loginUser" class="flex flex-col gap-3">
    <div class="mt-4 mb-4">
      <label for="input-group-1" class="block mb-2.5 text-sm font-medium text-heading">Email</label>
      <InputText
        v-model="email"
        class="w-full"
        name="username"
        type="email"
        placeholder="name@gmail.com"
      />
    </div>

    <div class="mb-2 relative">
      <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Password</label>

      <InputText
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        id="password"
        class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        placeholder="••••••••"
        required
      />
      <!-- Eye toggle button -->
      <button
        type="button"
        @click="showPassword = !showPassword"
        class="absolute top-13 right-3 -translate-y-1/2 text-gray-500 hover:text-heading"
      >
        <svg
          v-if="!showPassword"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.986 9.986 0 012.401-4.171m2.336-1.677A9.96 9.96 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.99 9.99 0 01-4.41 5.774M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
        </svg>
      </button>
    </div>
    <div class="flex justify-end">
      <RouterLink to="/forgot" class="text-teal-700 mb-2">Forgot password? </RouterLink>
    </div>

    <!-- <button type="submit" class="bg-orange-400 py-2 rounded text-white">Sign In</button>
   -->
    <button :disabled="loading" class="bg-orange-400 mt-4 mb-2 py-2 px-6 rounded w-full text-white">
      {{ loading ? 'Signing in...' : 'Sign In' }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth/useAuth'
import { RouterLink, RouterView } from 'vue-router'

import Password from 'primevue/password'

const auth = useAuthStore()
const email = ref('')
const password = ref('')

const loading = ref(false)

const loginUser = async () => {
  loading.value = true
  try {
    await auth.login(email.value, password.value)
    alert('Login successful')
  } catch (err: any) {
    alert(err.response?.data?.message || 'Login failed')
  } finally {
    loading.value = false
  }
}

const showPassword = ref(false)
</script>
