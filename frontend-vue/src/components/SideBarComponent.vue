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
                <li><a>Dashboard</a></li>
                <li><a>CashBox</a></li>
                <li><a>Inventory</a></li>
                <li><a>Vacation</a></li>
              </div>
            </li>
            <li>
              <div>
                <li><a>Box</a></li>
                <li><a>Cardio</a></li>
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
    min-height: 10vh;
    border-right: 1px solid rgb(211, 209, 209);
    min-width: 10vw;
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