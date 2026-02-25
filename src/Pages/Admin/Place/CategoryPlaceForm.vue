<template>
  <main class="mt-4">
    <div class="max-w-md mx-auto p-4">
      <h2 class="text-xl font-bold mb-4">Add Place Category</h2>
      <p v-if="message" class="mt-4 mb-4 text-green-600">{{ message }}</p>
      <p v-if="error" class="mt-4 mb-4 text-red-600">{{ error }}</p>
      <form @submit.prevent="submitCategory" class="space-y-3">
        <div>
          <label class="block text-sm mb-4">Category Name</label>
          <input v-model="form.name" type="text" class="border rounded w-full p-2" required />
        </div>

        <div>
          <label class="block text-sm mb-4">Description</label>
          <textarea
            v-model="form.description"
            class="border rounded w-full p-2"
            required
          ></textarea>
        </div>

        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded" :disabled="loading">
          {{ loading ? 'Saving...' : 'Save Place' }}
        </button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useAddCategory } from '@/composables/Place/useAddCategory'
const { form, loading, message, error, submitCategory } = useAddCategory()
</script>
