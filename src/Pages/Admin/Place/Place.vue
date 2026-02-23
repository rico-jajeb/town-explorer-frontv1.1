<template>
  <main class="mt-4 mx-8">
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
        <p class="text-body">Manage and monitor all locationin your town</p>
      </div>
      <div class="flex gap-4 items-center">
        <form>
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-body"
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
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search"
              required
            />
          </div>
        </form>

        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="h-12 shrink-0 inline-flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
          type="button"
        >
          <svg
            class="w-4 h-4 me-1.5 -ms-0.5"
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
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
          Filter by
          <svg
            class="w-4 h-4 ms-1.5 -me-0.5"
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
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdown"
          class="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-32"
        >
          <ul class="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Color</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Category</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Price</a
              >
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                >Sign out</a
              >
            </li>
          </ul>
        </div>

        <button class="bg-blue-400 px-3 py-2 h-12 rounded rounded-2">Add Place</button>
      </div>
    </section>

    <section class="mt-8">
      <PlaceCard />
    </section>

    <section class="mt-8">
      <PlaceMap />
    </section>
  </main>
</template>

<script setup lang="ts">
import PlaceMap from '@/components/Maps/PlaceMap.vue'
import PlaceCard from './PlaceCard.vue'
</script>
