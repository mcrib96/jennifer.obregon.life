import { createRouter, createWebHistory } from 'vue-router'
import All from '@/pages/All.vue'
import About from '@/pages/About.vue'
import Connect from '@/pages/Connect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: All
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/connect',
      name: 'connect',
      component: Connect
    }
  ]
})

export default router
