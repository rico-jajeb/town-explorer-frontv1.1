<template>
  <main class="grid grid-cols-9 min-h-screen">
    <nav
      v-if="isVisible"
      class="col-span-0 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-1"
    >
      <SideBarAdmin />
    </nav>
    <HeaderAdmin />
    <section
      class="col-span-9 sm:col-span-7 md:col-span-7 lg:col-span-7 xl:col-span-8 sm:ml-10 md:ml-4 lg:ml-16 xl:ml-16 2xl:ml-4 mt-14 p-4"
    >
      <div class="border border-gray-300 border-dashed rounded-lg min-h-screen">
        <RouterView />
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBarAdmin from '@/components/navigation/SideBarAdmin.vue'
import HeaderAdmin from '@/components/navigation/HeaderAdmin.vue'

import { useButton } from '@/composables/Button/useButton'

const { isVisible } = useButton()
</script>
