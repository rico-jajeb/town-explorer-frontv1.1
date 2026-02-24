<template>
  <div
    class="sm:col-span-2 col-span-8 h-full bg-neutral-primary-soft block p-6 border border-default rounded-base shadow-xs"
  >
    <h1 class="text-xl font-bold">Recent Activity</h1>
    <ol class="mt-4 relative border-s border-default">
      <li class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"
        ></div>
        <time class="text-sm font-normal leading-none text-body">February 2022</time>
        <h3 class="text-lg font-semibold text-heading my-2">Application UI code in Tailwind CSS</h3>
        <p class="mb-4 text-base font-normal text-body">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
          and pre-order E-commerce & Marketing pages.
        </p>
      </li>
      <li class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"
        ></div>
        <time class="text-sm font-normal leading-none text-body">March 2022</time>
        <h3 class="text-lg font-semibold text-heading my-2">Marketing UI design in Figma</h3>
        <p class="text-base font-normal text-body">
          All of the pages and components are first designed in Figma and we keep a parity between
          the two versions even as we update the project.
        </p>
      </li>
      <li class="ms-4">
        <div
          class="absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer"
        ></div>
        <time class="mb-1 text-sm font-normal leading-none text-body">April 2022</time>
        <h3 class="text-lg font-semibold text-heading my-2">E-Commerce UI code in Tailwind CSS</h3>
        <p class="text-base font-normal text-body">
          Get started with dozens of web components and interactive elements built on top of
          Tailwind CSS.
        </p>
      </li>
    </ol>
    <section class="flex justify-center mt-14">
      <a href="" class="text-blue-400">View All Activity</a>
    </section>
  </div>
</template>
<script setup></script>
