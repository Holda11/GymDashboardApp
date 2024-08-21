<template>
    <div class="overlay" v-if="isOpen">
        <div class="modal">
            <p>Ahoj, tady je nějaký kontext.</p>
            <button class="closeButton" @click="closeModal"> X </button>
        </div>
    </div>
</template>

<script>
import { useModalState } from '../Supports/useModalState';

export default {
  setup() {
    const { isOpen, closeModal } = useModalState();
    return { isOpen, closeModal };
  }
}
</script>

<style lang="scss">
    .modal{
        background-color: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    width:80%;
    max-width: 500px;
    border: 1px solid black;
    }
    .overlay{
        position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
</style>