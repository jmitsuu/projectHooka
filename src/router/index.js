import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EssenciaView from '../views/EssenciaView.vue'
import CarvaoView from '../views/CarvaoView.vue'
import AluminioView from '../views/AluminioView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/essencia',
      name: 'essencia',
      component: EssenciaView
    },
    {
      path: '/carvao',
      name: 'carvao',
      component: CarvaoView
    },
    {
      path: '/aluminio',
      name: 'aluminio',
      component: AluminioView
    }
  ]
})

export default router
