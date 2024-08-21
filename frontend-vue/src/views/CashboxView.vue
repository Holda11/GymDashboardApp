<script setup>
import CashboxComponent from '@/components/CashboxComponent.vue';
import CountingComponent from '@/components/CountingComponent.vue';
</script>

<template>
    <div class="CashboxView">
        <div class="CashboxView__Top">
            <CashboxComponent/>
        </div>
        <div class="CashboxView__Bottom">
            <CountingComponent/>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/variables.scss';
.CashboxView{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    &__Top{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    &__Bottom{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>