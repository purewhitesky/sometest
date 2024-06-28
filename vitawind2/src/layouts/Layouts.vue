<template>
  <div
    class="relative flex h-screen w-screen flex-col bg-gradient-to-tr from-green-400 via-blue-400 to-purple-600"
  >
    <Navigation></Navigation>

    <slot></slot>
  </div>
</template>
<script setup>
import Navigation from '@/components/Navigation.vue'
</script>
