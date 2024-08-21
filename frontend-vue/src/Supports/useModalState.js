// useModalState.js
import { ref } from 'vue';

const isOpen = ref(false);

function openModal() {
    isOpen.value = true;
}

function closeModal() {
    isOpen.value = false;
}

export function useModalState() {
    return { isOpen, openModal, closeModal }
}
