<template>
  <div class="grid grid-cols-[1fr,5fr,1fr] grid-rows-1 items-center justify-items-center">
    <BaseIcon
      :path="mdiArrowLeft"
      w="w-16"
      h="h-16"
      size="48"
      class="text-slate-400 hover:text-black"
      @click="countDecrease"
    ></BaseIcon>
    <div class="flex flex-col gap-2 text-center font-black">
      <div class="mb-5 text-2xl">
        {{ ChangePage.name }}
      </div>
      <div
        class="relative text-gray-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-gray-500 after:transition-transform after:duration-300 after:ease-in-out hover:text-black hover:after:origin-bottom-left hover:after:scale-x-100"
        v-for="child in ChangePage.page"
      >
        <RouterLink :to="child">
          {{ child }}
        </RouterLink>
      </div>
    </div>
    <BaseIcon
      :path="mdiArrowRight"
      w="w-16"
      h="h-16"
      size="48"
      class="text-slate-400 hover:text-black"
      @click="countIncrease"
    ></BaseIcon>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'
import BaseIcon from '@/components/BaseIcon.vue'

const count = ref(0)
const ArrData2 = ref({
  navigation: [
    {
      name: 'About',
      page: ['User', 'Skill', 'Education']
    },
    {
      name: 'Game',
      page: ['Snake']
    },
    {
      name: 'muisc setting',
      page: [0, 1, 2, 3, 4, '555']
    }
  ]
})
const ChangePage = computed(() => {
  return ArrData2.value.navigation[count.value]
})
const countIncrease = () => {
  if (count.value < ArrData2.value.navigation.length - 1) {
    count.value++
  }
}
const countDecrease = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>
