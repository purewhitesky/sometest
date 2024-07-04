import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/ChangeButton.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
  {
    path: '/snake',
    name: 'Snake',
    component: () => import('../views/Snake.vue')
  },
    {
    path: '/TicTacToe',
    name: 'TicTacToe',
    component: () => import('../views/TicTacToe.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
