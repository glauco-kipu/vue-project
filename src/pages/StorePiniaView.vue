<script setup>
import { ref, computed } from 'vue';
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({ counter: 0, name: 'couter' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  }
})
const name = 'couter';
const counter = computed(() => useCounterStore().counter);
const counterStore = useCounterStore();
const incrementStore = () => {
  counterStore.increment();
};
const decrementStore = () => {
  counterStore.decrement();
};
const resetStore = () => {
  counterStore.reset();
};
const colorBasedOnCounter = computed (() => {
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
</script>

<template>
  <div class="flex flex-col gap-1 pt-4 ">
    <h1 class="text-center mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      Hola <strong>{{ 
        
        useCounterStore().name.toUpperCase()
        
      }}</strong>
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
          @click="incrementStore"
        >
          Increment
        </button>
        <button
          type="button"
          class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          @click="decrementStore"
        >
          Decrement
        </button>
        <button
          type="button"
          class="px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          @click="resetStore"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

strong{
  font-weight: 600;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>