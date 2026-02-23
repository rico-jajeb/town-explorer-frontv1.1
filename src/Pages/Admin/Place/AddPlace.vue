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
              to="/add-place"
              class="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand"
            >
              Add Place
            </RouterLink>
          </div>
        </li>
      </ol>
    </nav>

    <!-- amo ini an header an -->
    <section class="mt-4">
      <div>
        <h1 class="mb-2 font-bold text-2xl">Add New Place's</h1>
        <p class="text-body">Create a place profile and add it to your explorer.</p>
      </div>
    </section>

    <section class="mt-4">
      <AddPlaceForm />
    </section>
  </main>
</template>
<script setup>
import AddPlaceForm from './AddPlaceForm.vue'
</script>
