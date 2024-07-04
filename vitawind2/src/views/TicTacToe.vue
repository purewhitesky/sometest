<template>
  <Layouts>
    <div class="mt-5 flex flex-1 flex-col items-center justify-center gap-5">
      <div class="flex justify-center" :class="GameEndFn">
        <div v-for="y in Gamebg">
          <div v-for="x in y">
            <div
              :disabled="GameOver !== ''"
              @click="getID(x.id, x)"
              :class="changeBgColor(x.id)"
              class="flex h-32 w-32 items-center justify-center border-2"
              :key="x.id"
            >
              <div v-show="x.icon !== ''">
                <BaseIcon :path="x.icon"></BaseIcon>
              </div>
              {{ x.id }}
            </div>
          </div>
        </div>
      </div>
      <div v-show="GameOver === ''">
        <div v-show="changPlayer">Player1 GO</div>
        <div v-show="!changPlayer">Player2 GO</div>
      </div>
      <div v-show="GameOver !== ''">
        {{ GameOver }}
      </div>
      <button @click="Start" class="rounded-xl bg-white p-2">Again Game</button>
    </div>
  </Layouts>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import { mdiClose, mdiCircleOutline } from '@mdi/js'

const GamebgSetting = ref({ X: 3, Y: 3 })
const Gamebg = ref([[]])
const GameX = ref([])

onMounted(() => {
  Start()
})

const Start = () => {
  //初始化
  GamebgSetting.value = { X: 3, Y: 3 }
  Gamebg.value = [[]]
  GameX.value = []
  ID.value = 0
  changPlayer.value = true
  player1.value = []
  player2.value = []
  count.value = 0
  GameOver.value = ''
  const idCount = ref(1)
  for (let y = 0; y < GamebgSetting.value.Y; y++) {
    for (let x = 0; x < GamebgSetting.value.X; x++) {
      GameX.value[x] = { id: idCount.value, icon: '', locationXY: [x, y] }
      idCount.value++
    }
    Gamebg.value[y] = GameX.value
    GameX.value = []
  }
}

const ID = ref(0)
const changPlayer = ref(true)
const player1 = ref([])
const player2 = ref([])
const count = ref(0)
const getID = (idData, x) => {
  ID.value = idData
  if (changPlayer.value) {
    Gamebg.value[x.locationXY[1]][x.locationXY[0]].icon = mdiClose
    player1.value.push(ID.value)
    changPlayer.value = !changPlayer.value
  } else {
    Gamebg.value[x.locationXY[1]][x.locationXY[0]].icon = mdiCircleOutline
    player2.value.push(ID.value)
    changPlayer.value = !changPlayer.value
  }
  GameEnd(count.value)
  count.value++
}

const GameOver = ref('')
let finsh = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const GameEnd = (countData) => {
  for (const item of finsh) {
    if (
      item.filter((e) => {
        return player1.value.indexOf(e) > -1
      }).length === 3
    ) {
      GameOver.value = 'player1 win'
    }
    if (
      item.filter((e) => {
        return player2.value.indexOf(e) > -1
      }).length === 3
    ) {
      GameOver.value = 'player2 win'
    }
  }
  if (GameOver.value == '' && countData === GamebgSetting.value.X * GamebgSetting.value.Y - 1) {
    GameOver.value = '平局'
  }
}
const GameEndFn = computed(() => {
  if (GameOver.value != '') {
    return 'pointer-events-none'
  }
})

const changeBgColor = (keyID) => {
  if (keyID === ID.value) {
    return 'bg-red-400 pointer-events-none'
  } else {
    return 'bg-slate-400'
  }
}
</script>
