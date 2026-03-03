<template>
  <HeaderUser />
  <h1 class="pt-8">This is the Home Page</h1>
  <nav class="flex gap-8">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/add-place">Place</RouterLink>
    <RouterLink to="/admin">Admin</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import HeaderUser from '@/components/navigation/User/HeaderUser.vue'
import Logout from './Auth/Logout.vue'
</script>
