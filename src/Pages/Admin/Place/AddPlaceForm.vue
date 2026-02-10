<template>
  <form class="mx-auto">
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Place Name</label
        >
        <input
          type="text"
          id="place_name"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place name..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Place Description</label
        >
        <input
          type="text"
          id="description"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place description..."
          required
        />
      </div>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Latitude</label
        >
        <input
          type="text"
          id="latitude"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place latitude..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Longitude</label
        >
        <input
          type="text"
          id="longitude"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place longitude..."
          required
        />
      </div>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Price Level</label
        >
        <input
          type="text"
          id="Price_Level"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place Price Level..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Average Cost</label
        >
        <input
          type="text"
          id="average_cost"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place average cost..."
          required
        />
      </div>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Opening Time</label
        >
        <input
          type="text"
          id="opening_time"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place opening time..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Closing Time</label
        >
        <input
          type="text"
          id="closing_time"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place closing time..."
          required
        />
      </div>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Category</label
        >
        <input
          type="text"
          id="category"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place category..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading">Rating</label>
        <input
          type="text"
          id="category"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place rating..."
          required
        />
      </div>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >visit duration</label
        >
        <input
          type="text"
          id="visit"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place visit duration..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading"
          >Facebook</label
        >
        <input
          type="text"
          id="facebook"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place facebook..."
          required
        />
      </div>
    </section>
    <section class="grid grid-cols-4 gap-8">
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading">Email</label>
        <input
          type="email"
          id="email"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place email..."
          required
        />
      </div>
      <div class="mb-5 col-span-2">
        <label for="Place name" class="block mb-2.5 text-sm font-medium text-heading">number</label>
        <input
          type="text"
          id="number"
          class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="Enter place number..."
          required
        />
      </div>
    </section>

    <label for="remember" class="flex items-center mb-5">
      <input
        id="remember"
        type="checkbox"
        value=""
        class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
        required
      />
      <p class="ms-2 text-sm font-medium text-heading select-none">
        I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.
      </p>
    </label>
    <button
      type="submit"
      class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
    >
      Submit
    </button>
  </form>
</template>
<script setup lang="ts"></script>
