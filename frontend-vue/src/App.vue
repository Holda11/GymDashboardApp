<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/SideBarComponent.vue'


</script>

<template>
  <div class="App">
    <SideBar />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style>
.App {
  display: flex;
  flex-direction: row;
}
</style>
