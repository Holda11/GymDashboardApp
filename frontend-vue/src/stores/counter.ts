import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Entries from '@/Supports/Data/Entries'
import Data from '@/Supports/Data/Chart'
import Permission from '@/Supports/Data/Permission'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useDynamicStore = defineStore('dynamicStore', {
  state: () => ({
    entries: Entries,
    supplements: Data,
    permissions: Permission
  }),
  getters: {
    allEntriesName: (state) => state.entries.map((item)=>item.category),
    allSupplementsName: (state) => state.supplements.map((item)=>item.name),
    allPermissionsName: (state) => state.permissions.map((item)=>item.category),
    totalCount: (state) => state.entries.length + state.supplements.length + state.permissions.length
  },
  actions: {
    // Můžete přidat akce pokud potřebujete
  }
});
