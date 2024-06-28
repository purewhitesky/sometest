import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useState = defineStore('stateData', () => {
  const inputState = ref(false)

  return { inputState }
})
