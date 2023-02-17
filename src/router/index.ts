import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'Dashboard',
        component: () => import('@/views/DashboardPage.vue')
      },
      {
        path: 'Library',
        component: () => import('@/views/ProfilePage.vue')
      },
      {
        path: 'Settings',
        component: () => import('@/views/SettingsPage.vue')
      },
      {
        path: 'Stats',
        component: () => import('@/views/StatsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
