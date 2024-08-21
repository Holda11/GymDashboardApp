<script setup>
import { RouterView } from 'vue-router'
import SideBarComponent from './components/SideBarComponent.vue';
import InformationComponent from './components/InformationComponent.vue';
</script>

<template>
    <main class="Main">
        <SideBarComponent/>
            <RouterView/>
        <InformationComponent/>
    </main>
</template>

<style scoped lang="scss">
.Main{
    display: flex;
    max-width: 100%;
    max-height: 100%;
}
</style>
