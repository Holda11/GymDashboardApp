<script setup>
import InventoryComponent from '@/components/InventoryComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';

</script>

<template>
    <div class="InventoryView">
        <div>
            <InventoryComponent/>
        </div>
    </div>
    <ModalComponent/>
</template>

<style lang="scss">
.InventoryView{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>