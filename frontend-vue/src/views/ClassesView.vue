<template>
    <div class="Classes">
      <div v-if="selectedClass" class="Classes__Content">
        <h2>{{ selectedClass.name }}</h2>
        <p>{{ selectedClass.description }}</p>
      </div>
      <div v-else>
        Chyba
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Ctype from '../Supports/Data/Classes.js';
  
  export default {
    setup() {
      const route = useRoute();
      const selectedClass = ref(null);
  
      const fetchClass = (id) => {
      selectedClass.value = Ctype.find(item => item.id.toString() === id);
    };

    onMounted(() => {
      fetchClass(route.params.id);
    });

    // Sledování změn v parametru 'id' a aktualizace komponenty podle toho
    watch(() => route.params.id, (newId) => {
      fetchClass(newId);
    });
  
      return {
        selectedClass
      };
    }
  }
  </script>
  
  <style lang="scss">
  .Classes {
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    &__Content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
  </style>
  