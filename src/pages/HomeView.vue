<script setup>
import { inject } from 'vue'
const message = inject('message')
const redirectTo = (url) => {
    window.open(url, '_blank');
}
</script>

<template>
  <div class="flex flex-row justify-around pb-4 pt-4">
    <img
      class="h-20 max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
      alt="image description"
      @click="redirectTo('https://vite.dev/')"
    >
    <img
      class="h-20 max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="/src/assets/logo.svg"
      alt="image description"
      @click="redirectTo('https://vuejs.org/')"
    >
    <img
      class="h-20 max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
      alt="image description"
      @click="redirectTo('https://tailwindcss.com/')"
    >
    <img
      class="h-20 max-w-sm transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src="https://flowbite.com/docs/images/logo.svg"
      alt="image description"
      @click="redirectTo('https://flowbite.com/')"
    >
  </div>
  <div class="flex flex-col gap-2 ">
    <h1 class="text-center text-5xl text-gray-900 dark:text-white">
      Vite + Vue 3 + Tailwind CSS + Flowbite
    </h1>
    <h3 class="text-base text-gray-900 dark:text-white text-center">
      {{ message }} Welcome to project to explore tecnologies like
      Vite, Vue 3, Tailwind CSS
      and Flowbite. Here you will learn more about:
    </h3>
    <div class="flex flex-row gap-2 text-center justify-center pt-1">
      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://router.vuejs.org/')"
      >
        Vue Router
      </span>
      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://vuejs.org/guide/built-ins/teleport')"
      >
        Teleport
      </span>
      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://vuejs.org/guide/extras/fragments.html')"
      >
        Fragments
      </span>
      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://eslint.vuejs.org/')"
      > 
        Eslint
      </span>
      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://vuejs.org/guide/components/provide-inject')"
      >
        Inject
      </span>

      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://vueuse.org/')"
      >
        Suspense & Async
      </span>
      <span
        class="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
        @click="redirectTo('https://pinia.vuejs.org/')"
      >
        Pinia
      </span>
    </div>
    <div class="flex pt-4">
      <div class="size-14 grow-1" />
      <div class="size-14 grow-10">
        <h3 class=" mt-2 text-sm text-gray-900 dark:text-white text-center pt-4">
          Let's start exploring the project. You can use the navigation bar at the bottom of the page to
          navigate
          through the different applications. You can also use the links above to learn more about each
          technology.
        </h3>
      </div>
      <div class="size-14 grow-1" />
    </div>
  </div>
  <!-- <div class="flex flex-col gap-1 pt-4 ">
        <h1 class="text-3xl font-bold text-center">Learn more about</h1>
    </div>
    <div class="flex flex-row justify-around pb-4 pt-4 gap-4">
        <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                    acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
            <button href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
        <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                    acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
                <button href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
        <div
            class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                    acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
                <button href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
    </div> -->
</template>

<style scoped></style>
