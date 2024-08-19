<template>
    <div>
        <Cards name="Supplement" :value="RevenueBar" />
        <TableComponent :items="inventoryData" />
        <TableComponent :items="entryData" />
        <TableComponent :items="permissionData" />
    </div>
</template>

<script setup lang="jsx">
import { ref, watchEffect } from 'vue';
import TableComponent from './TableComponent.vue';
import inventoryData from '@/Supports/Data/Inventory';
import entryData from '@/Supports/Data/Entries';
import permissionData from '@/Supports/Data/Permission';

const RevenueBar = ref(0)
const RevenueEntries = ref(0)
const RevenuePermission = ref(0)

function setRevenueBar(change) {
    RevenueBar.value = change
}
function setRevenueEntries(change) {
    RevenueEntries.value = change
}
function setRevenuePermission(change) {
    RevenuePermission.value = change
}

const renderRevenue = (data, name) => {
    data.forEach((item) => {
        if ((item.category === name || item) && name === 'Supplement') {
            setRevenueBar(item.price * item.qty)
        }
        if ((item.category === name || item) && name === 'Vstupy') {
            setRevenueEntries(item.price * item.qty)
        }
        if ((item.category === name || item) && name === 'Permice') {
            setRevenuePermission(item.price * item.qty)
        } else {
            console.log('jebat')
        }
    });
}

renderRevenue(inventoryData, 'Supplement')
renderRevenue(entryData, 'Vstupy')
renderRevenue(permissionData, 'Permice')


console.log(RevenueEntries.value)

const Cards = ({ name, value }) => {
    renderRevenue(inventoryData, `${name}`)
    return (
        <div class="Cards">
            <div class='Cards__Row'>
                <h5>{name}</h5>
                <strong>{value.value} 0Kč</strong>
            </div>
            <div>
            </div>
        </div>
    )
}

</script>

<style>
/* Případné styly pro InventoryView */
</style>