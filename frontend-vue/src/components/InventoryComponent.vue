<script setup lang="js">
import Data from '@/Supports/Data/Inventory.js';
import { useModalState } from '../Supports/useModalState';

const {openModal} = useModalState()
</script>

<template>
    <div class="Inventory">
        <h3>Sklad</h3>
        <div>
            <table class="Table">
        <tbody>
            <tr>
            <th>Název</th>
            <th>Na skladě</th>
            <th>Price</th>
            <th>Akce</th>
        </tr>
        <tr v-for="item in Data" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{item.price}}</td>
            <td>{{item.qty}}</td>
            <td><button @click="openModal">Přidat</button> | <button>Odebrat</button></td>
        </tr>
        </tbody>
    </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
.Inventory{
    width: 100%;
    padding: 6px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.Table{
    width: 100%;
    padding: 12px;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    tr{
        font-size: 1.5rem;
    }
    th{
        align-items: flex-start;
        padding: 12px;
    }
    td{
      text-align: center;
    }
}
</style>