# vue-project

Welcome to project to explore tecnologies like [Vite](https://vite.dev/), [Vue 3](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/) and [Flowbite](https://flowbite.com/). You can explore the following concepts <strong>Vue Router</strong>, <strong>Pinia</strong>, <strong>Vue Composition API</strong>, <strong>Vue Teleport</strong>, <strong>Vue Fragments</strong>, <strong>Vue Suspense</strong>, <strong>Vue Eslint</strong>, <strong>Vue Inject</strong>, and <strong>Vue Suspense & Async</strong>.

![](screenshot.jpg)

Inside the project you can find four pages controlled by [Vue Router](https://router.vuejs.org/):

## /home
This is the home page of the project. It contains a simple page with diverse components and elements with Tailwind CSS and Flowbite.
## /counter
This page contains a simple counter component that uses ref, computed and watch to manage the state of the counter

## /teleport
This page contains two modals: One that uses Vue Teleport to render the modal in a different part of the DOM, and another that uses Flowbite's modal component.


## /store
This page is similar to the counter page, but it uses Pinia to manage the state of the counter and persist the state.


# Run and Build

To run the project, you need to have Node.js installed. You can check if you have it installed by running:

```bash
node -v
```
If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).
Once you have Node.js installed, you can clone the repository and install the dependencies:

```bash
git clone git@github.com:glauco-kipu/vue-project.git
cd vue-project
npm install
```

Then, you can run the project using the following command:

```bash
npm run dev
```
This will start a development server and open the project in your default web browser. You can also access the project at `http://localhost:5173/`.

## Linting
To lint the project, you can run the following command:

```bash
npm run lint
```
This will run ESLint on the project and check for any linting errors.

## Building
To build the project for production, you can run the following command:

```bash
npm run build
```
This will create a `dist` folder with the production build of the project. You can then deploy this folder to your web server.


## Evidences

1. **Vue 3 Fundamentals**: Look at the structure of the project, the components, and the use of Vue 3 features like the Composition API, Teleport, Fragments, and Suspense. The project is structured in a way that allows you to see how these features are used in practice.

2. **Composition API**: The project uses the Composition API to manage state and lifecycle hooks. You can see how the `ref`, `computed`, and `watch` functions are used in the `CounterView.vue` component.

3. **Script Setup**: The project uses the `<script setup>` syntax to define components, search for the `CounterView.vue`, `HomeView.vue`, etc components to see how it is used.

4. **Teleport**: The project uses Vue Teleport to render a modal in a different part of the DOM. You can see how the `Teleport` component is used in the `TeleportView.vue` component.

5. **Fragments**: The project uses Vue Fragments to render multiple root nodes in a component. You can see how this is used in the `HomeView.vue` component.

6. **Reactivity System**: The project uses Vue's reactivity system to manage state and update the DOM. You can see how the `ref`, `computed`, and `watch` functions are used in the `CounterView.vue` component.

7. **Vuex, Pinia, inject**: The project uses Pinia to manage state and persist the state. You can see how the `useCounterStore` store is defined and used in the `StoreView.vue` component. You can also see how the `inject` function is used to provide and inject dependencies in the `App.vue` and use it in the `HomeView.vue` component.

8. **Vue Router**: The project uses Vue Router to manage navigation between pages. You can see how the router is defined in the `src/main.js` file and how it is used in the `App.vue` component.

9. **Suspense & Async Components**: The project uses async components to load components on demand. You can see how this is used in the `main.js` where components like `StorePiniaView`, `CounterView`, and `TeleportView` are loaded asynchronously also Vue Suspense to handle async components You can see how this is used in the `App.vue` component.  