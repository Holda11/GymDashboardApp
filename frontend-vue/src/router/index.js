import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import CashboxView from '@/views/CashboxView.vue'
import InventoryView from '@/views/InventoryView.vue'
import ClassesView from '@/views/ClassesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/cashbox',
      name: 'cashbox',
      component: CashboxView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView
    },
    {
      path: '/classes/:id',
      name: 'classes',
      component: ClassesView,
      props: true
    },
  ]
})

export default router
