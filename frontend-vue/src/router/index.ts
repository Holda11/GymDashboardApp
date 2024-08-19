import CashboxComponent from '@/components/CashboxComponent.vue'
import ChallengesComponents from '@/components/ChallengesComponents.vue'
import PopularClassComponent from '@/components/PopularClassComponent.vue'
import TimelineComponent from '@/components/TimelineComponent.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: CashboxComponent
    }
  ]
})

export default router
