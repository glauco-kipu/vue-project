<script setup>
import { ref, computed, watch } from 'vue';
const name = 'couter';
const counter = ref(0);
const showToast = ref(true);

const toggleToast = () => {
  showToast.value = !showToast.value;
};

const increment = () => {
  counter.value++;
};
const decreament = () => {
  counter.value--;
};
const reset = () => {
  counter.value = 0;
};
const colorBasedOnCounter = computed(() => {
  // if zero return gray
  if (counter.value === 0) {
    return 'text-gray-900 dark:text-white';
  }
  // if positive return green
  if (counter.value > 0) {
    return 'text-green-500';
  }
  // if negative return red
  if (counter.value < 0) {
    return 'text-red-500';
  }
  return '';
});
watch(() => counter.value, (newValue) => {
  if (newValue === 0) {
    showToast.value = true;
  } else {
    showToast.value = false;
  }
});
</script>

<template>
  <div class="flex flex-col gap-1 pt-4 ">
    <h1 class="text-center mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      Hola <strong>{{ name.toUpperCase() }}</strong>
    </h1>
    <h2
      :class="colorBasedOnCounter"
      class="text-3xl font-bold text-center text-gray-900 dark:text-white lg:text-4xl sm:text-2xl"
    >
      {{ counter }}
    </h2>
    <div class="flex flex-col gap-1 pt-4 justify-center items-center">
      <div
        class="inline-flex rounded-md shadow-xs"
        role="group"
      >
        <button
          type="button"
          class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          @click="increment"
        >
          Increment
        </button>
        <button
          type="button"
          class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          @click="decreament"
        >
          Decrement
        </button>
        <button
          type="button"
          class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          @click="reset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
  <div
    v-if="counter == 0 && showToast == true"
    id="toast-top-left"
    class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm top-5 right-5 dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
    role="alert"
  >
    <svg
      class="w-5 h-5 text-blue-600 dark:text-blue-500"
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
        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
    <div class="ps-4 text-sm font-normal w-full">
      Your value is zero
    </div>
    <button
      type="button"
      class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      data-dismiss-target="#toast-top-left"
      aria-label="Close"
      @click="toggleToast"
    >
      <span class="sr-only">Close</span>
      <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
strong {
  font-weight: 600;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>