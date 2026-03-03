<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white border border-b-gray-200 border-t-white border-l-white border-r-white"
  >
    <section class="flext justify-center items-center">
      <div class="hidden sm:block">
        <button
          @click="toggleDiv"
          data-drawer-target="top-bar-sidebar"
          data-drawer-toggle="top-bar-sidebar"
          aria-controls="top-bar-sidebar"
          type="button"
          class="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-1 focus:ring-teal-300 font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
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
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>
      </div>
      <div class="sm:hidden block">
        <button
          @click="visible = true"
          data-drawer-target="top-bar-sidebar"
          data-drawer-toggle="top-bar-sidebar"
          aria-controls="top-bar-sidebar"
          type="button"
          class="text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
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
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </button>
      </div>
    </section>
  </nav>

  <Drawer v-model:visible="visible" header="&nbsp;">
    <AdminLink />
  </Drawer>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useButton } from '@/composables/Button/useButton'

import Drawer from 'primevue/drawer'
import { ref } from 'vue'
import AdminLink from './User/AdminLink.vue'

const visible = ref(false)
const { toggleDiv } = useButton()
</script>
