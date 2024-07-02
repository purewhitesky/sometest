<template>
  <Layouts>
    <div class="mt-5 flex flex-col items-center justify-center">
      <diV class="flex">
        <div v-for="y in Gamebg">
          <div v-for="x in y">
            <div v-show="x !== 'wall'" class="h-5 w-5 border-[1px] border-black">
              <div v-show="x === 2" class="h-full w-full bg-black"></div>
              <div v-show="x === 3" class="h-full w-full bg-red-500"></div>
            </div>
          </div>
        </div>
      </diV>
      <div>{{ GameOver }}</div>
      <div>Sorce:{{ playerCount }}</div>
    </div>
  </Layouts>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import Layouts from '@/layouts/Layouts.vue'
const Space = ref({ X: 10, Y: 10 })
const GamebgSetting = ref({ Y: Space.value.Y + 2, X: Space.value.X + 2 })
const Gamebg = ref([[]])
const GameX = ref([])
onMounted(() => {
  for (let y = 0; y < GamebgSetting.value.Y; y++) {
    for (let x = 0; x < GamebgSetting.value.X; x++) {
      if (y === 0) {
        GameX.value[x] = 'wall'
      } else if (y === GamebgSetting.value.Y - 1) {
        GameX.value[x] = 'wall'
      } else if (x === 0) {
        GameX.value[x] = 'wall'
      } else if (x === GamebgSetting.value.X - 1) {
        GameX.value[x] = 'wall'
      } else {
        GameX.value[x] = 0
      }
    }
    Gamebg.value[y] = GameX.value
    GameX.value = []
  }
  randomFn(playerlocation.value.x, playerlocation.value.y)
  console.log()
  GameStart()
  window.addEventListener('keydown', handleKeyDown) //啟動監聽
})

const playerlocation = ref({ x: 1, y: 1 })
const playerArr = ref([])
const playerCount = ref(0)
const directionX = ref(1)
const directionY = ref(0)
const speed = ref(1000)
let interval

const GameStart = () => {
  console.log(foodRandom.value)
  Gamebg.value[playerlocation.value.x][playerlocation.value.y] = 2
  interval = setInterval(() => {
    if (
      foodRandom.value.x === playerlocation.value.x &&
      foodRandom.value.y === playerlocation.value.y
    ) {
      randomFn()
      playerCount.value++
    }

    changeDirection(keyboard.value)

    playerArr.value.push({ x: playerlocation.value.x, y: playerlocation.value.y })
    if (playerCount.value === cleanCount.value) {
      cleanBg(playerArr.value[0].x, playerArr.value[0].y)
      playerArr.value.shift()
    } else {
      cleanCount.value++
    }
    playerlocation.value.x += directionX.value
    playerlocation.value.y += directionY.value

    GameEnd()

    Gamebg.value[playerlocation.value.x][playerlocation.value.y] = 2
  }, speed.value)
}

const GameOver = ref()
const GameEnd = () => {
  if (playerlocation.value.x < 1) {
    GameOver.value = 'GameOver'
    clearInterval(interval)
  }
  if (playerlocation.value.x > GamebgSetting.value.X - 2) {
    GameOver.value = 'GameOver'
    clearInterval(interval)
  }
  if (playerlocation.value.y < 1) {
    GameOver.value = 'GameOver'
    clearInterval(interval)
  }
  if (playerlocation.value.y > GamebgSetting.value.Y - 2) {
    GameOver.value = 'GameOver'
    clearInterval(interval)
  }
  if (playerlocation.value.x < 1) {
    playerlocation.value.x = 1
  }
  if (playerlocation.value.x > GamebgSetting.value.X - 2) {
    playerlocation.value.x = GamebgSetting.value.X - 2
  }
  if (playerlocation.value.y < 1) {
    playerlocation.value.y = 1
  }
  if (playerlocation.value.y > GamebgSetting.value.Y - 2) {
    playerlocation.value.y = GamebgSetting.value.Y - 2
  }

  playerArr.value.map((e) => {
    console.log(e)
  })
}

//監測鍵盤
const keyboard = ref()
const handleKeyDown = (event) => {
  keyboard.value = event.key
}
//切換玩家走向
const changeDirection = (keyboard) => {
  switch (keyboard) {
    case 'a':
      directionX.value = -1
      directionY.value = 0
      break

    case 'd':
      directionX.value = 1
      directionY.value = 0
      break

    case 's':
      directionX.value = 0
      directionY.value = 1
      break
    case 'w':
      directionX.value = 0
      directionY.value = -1
      break

    default:
      break
  }
}
//亂數生成食物
const foodRandom = ref({})
const randomFn = (fristX, fristY) => {
  let X = Math.floor(Math.random() * Space.value.X + 1)
  let Y = Math.floor(Math.random() * Space.value.Y + 1)
  foodRandom.value.x = X
  foodRandom.value.y = Y
  Gamebg.value[foodRandom.value.x][foodRandom.value.y] = 3
  console.log(foodRandom.value.x, foodRandom.value.y)
}
const cleanCount = ref(0)
const cleanBg = (x, y) => {
  Gamebg.value[x][y] = 0
}
</script>
