<template>
  <section class="col-span-1 p-8 flex justify-center items-center">
    <section
      class="max-w-lg bg-neutral-primary-soft px-10 py-6 border border-gray-100 rounded-2xl shadow-2xl"
    >
      <header class="text-center mt-8">
        <h1 class="text-3xl font-bold">Welcome Back</h1>
        <p class="text-lg mt-2 mb-8">Discover local gems and hidden attractions.</p>
      </header>

      <div class="flex justify-center">
        <button class="border py-2 px-4 rounded">Continue with Google</button>
      </div>

      <div class="flex items-center my-6">
        <span class="grow border-t border-gray-300"></span>
        <span class="mx-4 text-gray-500">or continue with email</span>
        <span class="grow border-t border-gray-300"></span>
      </div>

      <LoginForm />

      <div class="flex justify-center mt-8">
        <h1>Don't have an account?&nbsp;</h1>
        <RouterLink to="/register" class="text-teal-700 mb-2"> Register? </RouterLink>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth/useAuth'
import LoginForm from './LoginForm.vue'
import { RouterLink, RouterView } from 'vue-router'
import Loader from '@/components/Loading/Loader.vue'

const auth = useAuthStore()

onMounted(() => auth.fetchUser())

const logoutUser = () => auth.logout()
</script>
