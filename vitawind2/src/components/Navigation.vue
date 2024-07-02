<template>
  <div class="flex justify-between bg-slate-200 px-2">
    <div class="h-16 w-16">
      <div v-show="!buttonState" @click="buttonState = true">
        <BaseIcon
          :path="mdiMenu"
          w="w-16"
          h="h-16"
          size="48"
          class="text-slate-400 hover:text-black"
        ></BaseIcon>
      </div>
      <div v-show="buttonState" @click="buttonState = false"></div>
    </div>
    <div class="h-16 w-16">
      <RouterLink to="/">
        <BaseIcon
          :path="mdiHome"
          w="w-16"
          h="h-16"
          size="48"
          class="text-slate-400 hover:text-black"
        ></BaseIcon>
      </RouterLink>
    </div>
    <div class="flex items-center">
      <div class="h-16 w-16">
        <BaseIcon
          :path="mdiSearchWeb"
          w="w-16"
          h="h-16"
          size="48"
          class="text-slate-400 hover:text-black"
          @click="inputState = true"
        ></BaseIcon>
      </div>
      <input v-show="inputState" class="h-10 flex-1 rounded-xl pl-2" placeholder="Search..." />
    </div>
    <div class="flex items-center">
      <div class="h-16 w-16">
        <RouterLink to="/login">
          <BaseIcon
            :path="mdiLogin"
            w="w-16"
            h="h-16"
            size="48"
            class="text-slate-400 hover:text-black"
          ></BaseIcon>
        </RouterLink>
      </div>
    </div>
  </div>
  <div
    v-show="buttonState"
    class="absolute bottom-0 left-0 right-0 top-0 z-50 bg-white/30 backdrop-blur-md"
  >
    <BaseIcon
      @click="buttonState = false"
      :path="mdiClose"
      w="w-16"
      h="h-16"
      size="48"
      class="text-text-black"
    />
    <NavigationPage class="absolute bottom-0 left-0 right-0 top-16 z-50"></NavigationPage>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { mdiMenu, mdiClose, mdiHome, mdiSearchWeb, mdiLogin } from '@mdi/js'
import BaseIcon from '@/components/BaseIcon.vue'
import NavigationPage from '@/components/NavigationPage.vue'
import { useState } from '@/store/state'
import { storeToRefs } from 'pinia'

const { inputState } = storeToRefs(useState())

const buttonState = ref(false)
</script>
