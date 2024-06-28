<template>
  <Layouts>
    <div
      class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-slate-200 p-8"
    >
      <form class="mx-auto max-w-sm">
        <div class="mb-5">
          <label for="email" class="mb-2 block text-sm font-medium text-gray-900">Your email</label>
          <input
            type="email"
            id="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-5">
          <label for="password" class="mb-2 block text-sm font-medium text-gray-900"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-5 flex items-start">
          <div class="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
              required
            />
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900">Remember me</label>
        </div>
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </Layouts>
</template>
<script setup>
import { ref } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
const account = ref('')
const password = ref('')
</script>
