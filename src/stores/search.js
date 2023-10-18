import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('useSearchStore', () => {
  const search = ref()

  return { search }
})
