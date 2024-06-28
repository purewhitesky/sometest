<script setup>
import { ref } from 'vue'
import { mdiGithub, mdiFacebook, mdiInstagram, mdiTwitter } from '@mdi/js'
import BaseIcon from '@/components/BaseIcon.vue'
import Layouts from '@/layouts/Layouts.vue'

const countString = ref('')
const OpenRed = ref(false)
const addValue = (num) => {
  countString.value = countString.value + num
  if (countString.value.length >= 5) {
    countString.value = ''
    OpenRed.value = false
  }
  if (countString.value === '1423') {
    OpenRed.value = true
  }
}
</script>

<template>
  <Layouts>
    <div class="flex flex-1 items-center justify-center">
      <div class="relative grid h-96 w-96 grid-cols-2 grid-rows-2 gap-4 rounded-full *:transition">
        <button
          class="grid items-center justify-items-center rounded-3xl rounded-tl-[200px] bg-slate-200 text-black hover:scale-110 hover:bg-black hover:text-slate-200"
          @click="addValue(1)"
        >
          <BaseIcon class="translate-x-2 translate-y-2" :path="mdiGithub" w="" size="70"></BaseIcon>
        </button>
        <button
          class="grid items-center justify-items-center rounded-3xl rounded-tr-[200px] bg-slate-200 text-blue-600 hover:scale-110 hover:bg-blue-600 hover:text-slate-200"
          @click="addValue(2)"
        >
          <BaseIcon
            class="-translate-x-2 translate-y-2"
            :path="mdiFacebook"
            w=""
            size="70"
          ></BaseIcon>
        </button>
        <button
          class="grid items-center justify-items-center rounded-3xl rounded-bl-[200px] bg-slate-200 text-blue-400 hover:scale-110 hover:bg-blue-400 hover:text-slate-200"
          @click="addValue(3)"
        >
          <BaseIcon
            class="-translate-y-2 translate-x-2"
            :path="mdiTwitter"
            w=""
            size="70"
          ></BaseIcon>
        </button>
        <button
          class="grid items-center justify-items-center rounded-3xl rounded-br-[200px] bg-slate-200 text-fuchsia-400 hover:scale-110 hover:bg-fuchsia-400 hover:text-slate-200"
          @click="addValue(4)"
        >
          <BaseIcon
            class="-translate-x-2 -translate-y-2"
            :path="mdiInstagram"
            w=""
            size="70"
          ></BaseIcon>
        </button>
        <div
          v-if="OpenRed"
          class="absolute bottom-1/2 left-1/2 z-0 h-10 w-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-red-400"
        ></div>
      </div>
      <div>{{ countString }}</div>
    </div>
  </Layouts>
</template>

<style></style>
