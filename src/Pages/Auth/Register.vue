<script setup>
import { reactive, ref } from 'vue'
import API from '@/lib/axios'

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
    // 1. Get CSRF cookie first
    await API.get('/sanctum/csrf-cookie')

    // 2. Send register request
    await API.post('/api/register', form)

    alert('Registration successful!444')

    // optionally redirect
    // router.push('/dashboard')
  } catch (err) {
    if (err.response?.data?.errors) {
      errors.value = err.response.data.errors
    } else {
      alert('Registration failed')
    }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <h2 class="text-xl font-bold mb-4">Register</h2>

    <form @submit.prevent="register" class="space-y-3">
      <input v-model="form.name" placeholder="Name" class="input" />
      <p v-if="errors.name" class="error">{{ errors.name[0] }}</p>

      <input v-model="form.email" placeholder="Email" class="input" />
      <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>

      <input v-model="form.password" type="password" placeholder="Password" class="input" />
      <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>

      <input
        v-model="form.password_confirmation"
        type="password"
        placeholder="Confirm Password"
        class="input"
      />

      <button :disabled="loading" class="btn">
        {{ loading ? 'Registering...' : 'Register' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.btn {
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 6px;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
