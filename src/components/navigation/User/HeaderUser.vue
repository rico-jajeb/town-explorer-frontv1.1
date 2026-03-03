<template>
  <header>
    <div v-if="!auth.initialized">
      Hello,
      <ProgressSpinner
        style="width: 15px; height: 15px"
        strokeWidth="8"
        fill="transparent"
        animationDuration=".5s"
        aria-label="Custom ProgressSpinner"
      />
    </div>

    <div v-else-if="auth.user" class="">
      <p>Hello, {{ auth.user.name }}</p>
      <Logout />
    </div>

    <div v-else class="flex gap-4">
      <p>Hello, Guest</p>
      <section class="flex gap-2">
        <RouterLink to="/login">Login</RouterLink>
      </section>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth/useAuth'
import Logout from '@/Pages/Auth/Logout.vue'
import ProgressSpinner from 'primevue/progressspinner'

const auth = useAuthStore()
</script>
