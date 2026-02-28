<template>
  <div v-if="!auth.initialized">Hello, <Loader /></div>

  <div v-else>
    <p>Hello, {{ auth.user ? auth.user.name : 'Guest' }}</p>

    <div v-if="!auth.user">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" type="password" />
      <button @click="loginUser">Login</button>
    </div>

    <button v-else @click="logoutUser">Logout</button>
  </div>

  <h1>Testing</h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth/useAuth'

import Loader from '@/components/Loading/Loader.vue'

const auth = useAuthStore()
const email = ref('')
const password = ref('')

onMounted(() => auth.fetchUser())

const loginUser = async () => {
  try {
    await auth.login(email.value, password.value)
    alert('Login successful')
  } catch (err: any) {
    alert(err.response?.data?.message || 'Login failed')
  }
}

const logoutUser = () => auth.logout()
</script>
