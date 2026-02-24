<template>
  <main class="mt-4 mx-8">
    <!-- Breadcrump ini -->
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

    <!-- amo ini an header aadi an button like add category , place -->
    <section class="mt-4 sm:flex sm:justify-between">
      <div>
        <h1 class="mb-2 font-bold text-2xl">Place's</h1>
        <p class="text-body">Manage and monitor all locationin your town.</p>
      </div>
      <div class="sm:flex gap-4 sm:items-center sm:mt-0 mt-4">
        <RouterLink
          to="/add-place-category"
          class="flex items-center sm:mb-0 mb-2 px-2 py-1.5 bg-green-300 text-body rounded-base hover:bg-green-500 hover:text-black group"
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ms-3">Add Category</span>
        </RouterLink>
        <RouterLink
          to="/add-place"
          class="flex items-center bg-green-300 px-2 py-1.5 text-body rounded-base hover:bg-green-500 hover:text-black group"
          ><svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ms-3">Add Place</span>
        </RouterLink>
      </div>
    </section>

    <!-- amo ini liwat an Place stats Card -->
    <section class="mt-8">
      <PlaceCard />
    </section>

    <!-- amo liwat ini an kanan place table -->
    <section class="mt-8">
      <PlaceTable />
    </section>

    <!-- amo ini liwat an kanan geolocation map -->
    <section class="mt-8 mb-8 grid grid-cols-6 gap-8">
      <div class="sm:col-span-4 col-span-6">
        <PlaceMap />
      </div>
      <div class="sm:col-span-2 col-span-6">
        <RecentActivitiyPlace />
      </div>
    </section>

    <!-- amo ini an kanan Category Modal -->
    <BaseModal v-model="showModal">
      <CategoryPlaceForm />
    </BaseModal>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import BaseModal from '@/components/BaseModal/BaseModal.vue'

import { defineAsyncComponent } from 'vue'

const PlaceMap = defineAsyncComponent(() => import('@/components/Maps/PlaceMap.vue'))
import PlaceCard from './PlaceCard.vue'
import PlaceTable from './PlaceTable.vue'
import RecentActivitiyPlace from './RecentActivitiyPlace.vue'
import CategoryPlaceForm from './CategoryPlaceForm.vue'

const showModal = ref(false)
</script>
