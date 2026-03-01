<template>
  <main class="grid grid-cols-2 h-screen">
    <!-- Left Panel - Illustration & Branding -->
    <section
      class="col-span-1 relative bg-teal-700 bg-brand-teal overflow-hidden flex flex-col justify-between p-12 text-white"
    >
      <!-- Abstract Background Elements -->
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" fill="none" stroke="white" stroke-width="1" />
              <path d="M0 70 Q 25 45, 50 70 T 100 70" fill="none" stroke="white" stroke-width="1" />
              <path d="M0 30 Q 25 5, 50 30 T 100 30" fill="none" stroke="white" stroke-width="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <!-- Floating decorative elements -->
      <div class="absolute top-1/4 right-1/4 animate-[bounce_8s_infinite] opacity-20">
        <MapPinIcon />
      </div>
      <div class="absolute bottom-1/3 left-1/4 animate-[bounce_10s_infinite_reverse] opacity-10">
        <CompassIcon :size="180" />
      </div>
      <div class="absolute top-1/2 right-1/3 animate-[pulse_6s_infinite] opacity-30">
        <NavigationIcon :size="64" />
      </div>

      <!-- Branding Content -->
      <div class="relative z-10">
        <div class="flex items-center gap-3 mb-16">
          <div class="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
            <MapIcon class="h-8 w-8 text-white" />
          </div>
          <RouterLink to="/" class="text-2xl font-bold tracking-tight"> Town Explorer </RouterLink>
        </div>
      </div>

      <div class="relative z-10 max-w-md">
        <h1 class="text-4xl xl:text-5xl font-bold leading-tight mb-6">
          Discover the hidden gems in your city.
        </h1>
        <p class="text-teal-100 text-lg leading-relaxed mb-8">
          Join thousands of locals exploring the best food spots, secret attractions, and
          breathtaking destinations right in your backyard.
        </p>

        <!-- Testimonial / Social Proof -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex -space-x-3">
              <div
                v-for="i in 4"
                :key="i"
                class="w-10 h-10 rounded-full border-2 border-brand-teal bg-teal-800 flex items-center justify-center text-xs font-medium"
              >
                {{ String.fromCharCode(64 + i) }}
              </div>
            </div>
            <div class="text-sm">
              <div class="font-semibold">Join 50,000+ explorers</div>
              <div class="text-teal-200">from 120+ cities worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Right Panel - Add your form manually -->
    <section class="col-span-1 p-8 flex justify-center items-center">
      <RouterView />
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

import MapPinIcon from '@/components/icons/MapPinIcon.vue'
import CompassIcon from '@/components/icons/CompassIcon.vue'
import NavigationIcon from '@/components/icons/NavigationIcon.vue'
import MapIcon from '@/components/icons/MapIcon.vue'
</script>
