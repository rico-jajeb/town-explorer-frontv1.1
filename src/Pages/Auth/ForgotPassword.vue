<script setup>
import { reactive, ref } from 'vue'
import API from '@/lib/axios'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section
    class="w-full max-w-md bg-neutral-primary-soft px-10 py-6 border border-gray-100 rounded-2xl shadow-2xl"
  >
    <div class="">
      <div class="text-center mt-8 mb-8">
        <h1 class="text-3xl font-bold mb-2">Sorry</h1>
        <p class="text-gray-600">Forgot Password not yet available!</p>
      </div>

      <div class="flex justify-center mt-8">
        <h1>Go Back To ->&nbsp;</h1>
        <RouterLink to="/login" class="text-teal-700 mb-2"> Sign In? </RouterLink>
      </div>
    </div>
  </section>
</template>
