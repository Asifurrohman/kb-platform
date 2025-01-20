import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/auth/Login.vue'

// Sidebar menu beranda
import Homepage from '@/views/dashboard/beranda/Homepage.vue'

// Sidebar menu adik bintang saya
import MyAdikBintang from '@/views/dashboard/adikBintangSaya/MyAdikBintang.vue'
import MyAdikBintangActive from '@/views/dashboard/adikBintangSaya/MyAdikBintangActive.vue'
import MyAdikBintangFinished from '@/views/dashboard/adikBintangSaya/MyAdikBintangFinished.vue'

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
    },
    {
      path: '/adik-bintang-saya',
      component: MyAdikBintang,
      redirect: '/adik-bintang-saya/active',
      children: [
        {
          path: 'active',
          component: MyAdikBintangActive
        },
        {
          path: 'finished',
          component: MyAdikBintangFinished
        }
      ]
    }
  ],
})

export default router
