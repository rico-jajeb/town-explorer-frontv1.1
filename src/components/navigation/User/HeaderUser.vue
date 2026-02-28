<template>
  <header>
    <div v-if="!auth.initialized">Hello, <Loader /></div>

    <div v-else>
      <p>Hello, {{ auth.user ? auth.user.name : 'Guest' }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/useAuth'
import Loader from '@/components/Loading/Loader.vue'

const auth = useAuthStore()
</script>
