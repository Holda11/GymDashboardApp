<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <aside>
        <header>
        <nav class="Nav">
          <ul class="Nav__Items">
            <li>
              <div>
                <li><RouterLink to="/"><h1>Gym</h1></RouterLink></li>
              </div>
            </li>
            <li>
              <div> 
                <li><RouterLink to="/">Dashboard</RouterLink></li>
                <li><RouterLink to="/cashbox">CashBox</RouterLink></li>
                <li><RouterLink to="/inventory">Inventory</RouterLink></li>
              </div>
            </li>
            <li>
              <div>
                <li><RouterLink to="/classes/1">Box</RouterLink></li>
                <li><RouterLink to="/classes/2">Cardio</RouterLink></li>
              </div>
            </li>
            <li>
              <div>
                <li>Help</li>
                <li>Settings</li>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </aside>
</template>

<style lang="scss">
@import '../assets/styles/variables.scss';

.Nav{
    display: flex;
    min-height: 100vh;
    border-right: 1px solid rgb(211, 209, 209);
    min-width: fit-content;
    &__Items{
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    li{
        padding-top: 20px;
        padding-right: 24px;
        list-style: none;
        color: $secondary-Tcolor;
        font-weight: 500;
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
}
</style>