<template>
  <RouterLink to="admin" class="flex items-center ps-2.5 mb-5">
    <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3" alt="Flowbite Logo" />
    <span class="self-center text-lg text-heading font-semibold whitespace-nowrap"
      >Town Explorer</span
    >
  </RouterLink>
  <ul class="space-y-2 font-medium">
    <li>
      <RouterLink
        to="/admin"
        class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
      >
        <svg
          class="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
            d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
          />
        </svg>
        <span class="ms-3">Admin</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink
        to="/place"
        class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
      >
        <svg
          class="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
            d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
          />
        </svg>
        <span class="ms-3">Place</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink
        to="/"
        class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
      >
        <svg
          class="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
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
            d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
          />
        </svg>
        <span class="ms-3">Home</span>
      </RouterLink>
    </li>
  </ul>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
