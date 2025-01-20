import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/auth/Login.vue'

import Homepage from '@/views/dashboard/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login,
      meta:{
        hideNavbar: true,
        hideSidebar: true
      }
    }
  ],
})

export default router
