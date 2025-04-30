import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
const pinia = createPinia()

import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import HomeView from './pages/HomeView.vue'
const CounterView = defineAsyncComponent(() =>
  import('./pages/CounterView.vue')
)
const TeleportView = defineAsyncComponent(() =>
  import('./pages/TeleportView.vue')
)
const StorePiniaView = defineAsyncComponent(() =>
  import('./pages/StorePiniaView.vue')
)

const routes = [
  { path: '/', name:'home', component: HomeView, alias: '/home' },
  { path: '/counter', name:"counter", component: CounterView, alias: '/count' },
  { path: '/teleport', component: TeleportView },
  { path: '/store', component: StorePiniaView },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(pinia).mount('#app')
