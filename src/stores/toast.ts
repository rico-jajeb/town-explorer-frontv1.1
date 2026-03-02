// stores/toast.ts
import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    queue: [] as Array<{ severity: string; summary: string; detail: string; life: number }>,
  }),
  actions: {
    add(message: { severity: string; summary: string; detail: string; life: number }) {
      this.queue.push(message)
    },
    clear() {
      this.queue = []
    },
  },
})
