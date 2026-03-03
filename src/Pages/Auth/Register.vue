<script setup>
import { reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRegister } from '@/composables/Auth/useRegister'

const { form, loading, errors, register } = useRegister()

const showPassword = ref(false)
</script>

<template>
  <section
    class="w-full max-w-md bg-neutral-primary-soft px-10 py-6 border border-gray-100 rounded-2xl shadow-2xl"
  >
    <div class="">
      <div class="text-center mt-8 mb-8">
        <h1 class="text-3xl font-bold mb-2">Join the Adventure</h1>
        <p class="text-gray-600">
          Create your account and explore local gems, attractions, and hidden spots around your
          town.
        </p>
      </div>

      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
            >User name</label
          >
          <InputText
            v-model="form.name"
            type="text"
            id="first_name"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="ex: John"
            required
          />
          <p v-if="errors.name" class="error">{{ errors.name[0] }}</p>
        </div>
        <div class="mb-4">
          <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
            >Email</label
          >
          <InputText
            v-model="form.email"
            type="email"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@gmail.com"
            required
          />
          <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
        </div>

        <div class="mb-4 relative">
          <label for="password" class="block mb-2.5 text-sm font-medium text-heading"
            >Password</label
          >
          <InputText
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
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
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3l18 18"
              />
            </svg>
          </button>
          <p v-if="errors.password" class="error">{{ errors.password[0] }}</p>
        </div>

        <div class="mb-4">
          <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
            >Confirm Password</label
          >

          <InputText
            v-model="form.password_confirmation"
            type="password"
            placeholder="Confirm Password"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          />
        </div>

        <button
          :disabled="loading"
          class="bg-orange-400 mt-4 mb-2 py-2 px-6 rounded w-full text-white"
        >
          {{ loading ? 'Registering...' : 'Register' }}
        </button>
      </form>
      <div class="flex justify-center mt-8">
        <h1>Already have an account?&nbsp;</h1>
        <RouterLink to="/login" class="text-teal-700 mb-2"> Sign In? </RouterLink>
      </div>
    </div>
  </section>
</template>
