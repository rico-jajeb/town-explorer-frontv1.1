<template>
  <header class="mt-4 mx-8">
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <RouterLink
            to="/admin"
            class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand"
          >
            <svg
              class="w-4 h-4 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>
          </RouterLink>
        </li>
        <li>
          <div class="flex items-center space-x-1.5">
            <svg
              class="w-3.5 h-3.5 rtl:rotate-180 text-body"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <RouterLink
              to="place"
              class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand"
            >
              Place
            </RouterLink>
          </div>
        </li>
      </ol>
    </nav>
    <section class="mt-4 flex justify-between">
      <div>
        <h1 class="mb-2 font-bold text-2xl">Places</h1>
        <p class="text-body">Pastrana's Most Visit Place</p>
      </div>
      <div class="">
        <button class="bg-blue-400 px-4 py-2 rounded rounded-2">Add Place</button>
      </div>
    </section>
  </header>

  <main class="mt-6">
    <section class="max-w-8xl mx-auto px-1 py-1 rounded-2xl bg-gray-200">
      <PlaceMap />
    </section>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PlaceMap from '@/components/Maps/PlaceMap.vue'
</script>
