<template>
  <form action="" class="mt-8">
    <section class="grid grid-cols-6 gap-4">
      <section
        class="sm:col-span-4 col-span-6 bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs"
      >
        <h1 class="text-2xl font-bold">Place Information</h1>

        <section class="mt-4 grid grid-cols-2 gap-8">
          <div class="sm:col-span-1 col-span-2">
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
              >Place Name <span class="text-red-600">*</span></label
            >
            <input
              type="text"
              id="first_name"
              class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="Enter Place name..."
              required
            />
          </div>
          <div class="sm:col-span-1 col-span-2">
            <label for="countries" class="block mb-2.5 text-sm font-medium text-heading"
              >Category <span class="text-red-600">*</span></label
            >
            <select
              id="countries"
              class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option selected>Seletec a category</option>
              <option value="US">Restaurant</option>
              <option value="CA">Unwind</option>
              <option value="FR">FoodTrip</option>
              <option value="DE">School</option>
            </select>
          </div>
        </section>

        <div class="mt-4">
          <label for="message" class="block mb-2.5 text-sm font-medium text-heading"
            >Description <span class="text-red-600">*</span></label
          >
          <textarea
            id="message"
            rows="4"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
            placeholder="Enter Place description..."
          ></textarea>
        </div>

        <div class="mt-4">
          <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
            >Address <span class="text-red-600">*</span></label
          >
          <input
            type="text"
            id="first_name"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Address e.g: Brgy, City, Province..."
            required
          />
        </div>
      </section>

      <div
        class="sm:col-span-2 col-span-6 bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs"
      >
        <h1 class="text-2xl font-bold">Place Image</h1>
        <h1 class="mt-1 text-sm">Maximum Image size: 10mb <span class="text-red-600">*</span></h1>
        <div class="mt-4 flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-base cursor-pointer hover:bg-neutral-tertiary-medium"
          >
            <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4"
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
                  d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
    </section>

    <!-- amo ini an kanan Contacts and status -->
    <section class="grid grid-cols-6 gap-4 mt-8">
      <section
        class="sm:col-span-4 col-span-6 bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs"
      >
        <h1 class="text-2xl font-bold">Contact & Details</h1>

        <section class="grid grid-cols-2 mt-4 gap-8">
          <div class="sm:col-span-1 col-span-2">
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
              >Website <span class="text-red-600">*</span></label
            >
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="text"
                id="first_name"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="https://example.com"
                required
              />
            </div>
          </div>
          <div class="sm:col-span-1 col-span-2">
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
              >Phone Number <span class="text-red-600">*</span></label
            >
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"
                />
              </svg>

              <input
                type="number"
                id="first_name"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="09123456789"
                required
              />
            </div>
          </div>
        </section>
        <section class="grid grid-cols-2 mt-4 gap-8">
          <div class="sm:col-span-1 col-span-2">
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
              >Facebook <span class="text-red-600">*</span></label
            >
            <div class="flex items-center">
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
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="text"
                id="first_name"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="https://example.com"
                required
              />
            </div>
          </div>
          <div class="sm:col-span-1 col-span-2">
            <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
              >Email <span class="text-red-600">*</span></label
            >
            <div class="flex items-center">
              <svg
                class="w-6 h-6 mr-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"
                />
                <path
                  d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"
                />
              </svg>

              <input
                type="email"
                id="first_name"
                class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="email@gmail.com"
                required
              />
            </div>
          </div>
        </section>
        <section class="grid grid-cols-2 mt-4 gap-8">
          <div class="sm:col-span-1 col-span-2">
            <label for="start-time" class="block mb-2 text-sm font-medium text-heading"
              >Opening Hours <span class="text-red-600">*</span></label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
              >
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
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="start-time"
                class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                min="09:00"
                max="18:00"
                value="00:00"
                required
              />
            </div>
          </div>
          <div class="sm:col-span-1 col-span-2">
            <label for="end-time" class="block mb-2 text-sm font-medium text-heading"
              >Closing Hours <span class="text-red-600">*</span></label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
              >
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
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="end-time"
                class="block w-full p-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                min="09:00"
                max="18:00"
                value="00:00"
                required
              />
            </div>
          </div>
        </section>

        <section class="mt-4">
          <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading"
            >Price Range <span class="text-red-600">*</span></label
          >
          <div class="flex items-center">
            <svg
              class="w-6 h-6 mr-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z"
                clip-rule="evenodd"
              />
            </svg>

            <select
              id="countries"
              class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            >
              <option selected>Price Range</option>
              <option value="US">Free</option>
              <option value="CA">Cheap(0-100)</option>
              <option value="FR">Moderate(100-300)</option>
              <option value="DE">Expensive(300-500)</option>
              <option value="DE">Luxury(500-1000+)</option>
            </select>
          </div>
        </section>
      </section>

      <!-- amo ini kanan Visisbility Status -->
      <section
        class="sm:col-span-2 col-span-6 h-46 bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs"
      >
        <h1 class="text-2xl font-bold">Visibility Status</h1>

        <div class="flex justify-between pt-8">
          <div class="">
            <h1 class="text-xl font-bold">Featured Place</h1>
            <h1 class="text-sm">Highlight this place on the homepage.</h1>
          </div>
          <div class="flex items-center">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="relative w-12 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"
              ></div>
            </label>
          </div>
        </div>
      </section>
    </section>

    <!-- amo ini an kanan geolocation map -->
    <section class="mt-8">
      <h1 class="text-2xl font-bold mb-4 mt-4 flex">
        <svg
          class="w-6 h-6 mr-2 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
            clip-rule="evenodd"
          />
        </svg>
        Pin the place Location
      </h1>
      <PlaceMap />
    </section>

    <!-- amo adi an submit button -->
    <section class="mt-8 mb-8">
      <button class="flex bg-green-300 px-4 py-2 rounded-sm">
        <svg
          class="w-6 h-6 mr-2 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Z" />
          <path
            fill-rule="evenodd"
            d="M11 7V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm4.707 5.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
            clip-rule="evenodd"
          />
        </svg>

        Save
      </button>
    </section>
  </form>
</template>
<script setup>
import PlaceMap from '@/components/Maps/PlaceMap.vue'
</script>
