<template>
  <!-- <button @click="handleLogout" class="bg-red-600 text-white px-4 py-2 rounded-md">Sign Out</button> -->
  <button
    @click="handleLogout"
    :disabled="loading"
    class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
  >
    {{ loading ? 'Signing out...' : 'Sign Out' }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useLogout } from '@/composables/Auth/useLogout'

const { handleLogout, loading } = useLogout()
</script>
