<template>
  <aside
    id="top-bar-sidebar"
    class="fixed top-0 left-0 pt-14 z-40 h-full transition-transform -translate-x-full sm:translate-x-0 border border-r-teal-300 0 sm:w-48 md:w-54 lg:w-54"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft">
      <AdminLink />
    </div>
  </aside>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AdminLink from './User/AdminLink.vue'
</script>
