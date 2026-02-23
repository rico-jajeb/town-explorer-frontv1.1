<template>
  <div v-if="modelValue" class="modal-overlay">
    <div class="modal-box">
      <button class="close-btn" @click="close">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <slot />
    </div>
  </div>

  <!-- ig add la ini ngadto m bbutangan hin modal,   <BaseModal v-model="showModal">
      <CategoryPlaceForm />
    </BaseModal> -->

  <!-- <button
          type="button"
          @click="showModal = true" -->

  <!-- import { ref } from 'vue'
          import BaseModal from '@/components/BaseModal/BaseModal.vue'
const showModal = ref(false) -->
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function close() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* very top */
}

.modal-box {
  background: white;
  padding: 20px;
  border-radius: 12px;
  min-width: 300px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
}
</style>
