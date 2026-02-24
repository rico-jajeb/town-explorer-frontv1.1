<template>
  <HeaderAdmin />

  <main class="grid grid-cols-9 min-h-screen">
    <nav class="sm:col-span-1 col-span-0 bg-gray-300">
      <SideBarAdmin />
    </nav>
    <section class="p-4 sm:ml-16 mt-14 sm:col-span-8 col-span-9">
      <div class="border border-default border-dashed rounded-base min-h-screen">
        <RouterView />
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBarAdmin from '@/components/navigation/SideBarAdmin.vue'
import HeaderAdmin from '@/components/navigation/HeaderAdmin.vue'
</script>
