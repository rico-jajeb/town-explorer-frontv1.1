<template>
  <div class="max-w-md mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Add Category</h2>

    <form @submit.prevent="submitPlace" class="space-y-3">
      <div>
        <label class="block text-sm">Category Name</label>
        <input v-model="form.name" type="text" class="border rounded w-full p-2" required />
      </div>

      <div>
        <label class="block text-sm">Description</label>
        <textarea v-model="form.description" class="border rounded w-full p-2" required></textarea>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded" :disabled="loading">
        {{ loading ? 'Saving...' : 'Save Place' }}
      </button>
    </form>

    <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    <p v-if="error" class="mt-4 text-red-600">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/add-category'

interface PlacePayload {
  name: string
  description: string
}

const form = reactive<PlacePayload>({
  name: '',
  description: '',
})

const loading = ref(false)
const message = ref('')
const error = ref('')

async function submitPlace() {
  loading.value = true
  message.value = ''
  error.value = ''

  try {
    const res = await axios.post(API_URL, form)

    message.value = res.data.message

    // reset form
    form.name = ''
    form.description = ''
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Something went wrong while saving.'
  } finally {
    loading.value = false
  }
}
</script>
