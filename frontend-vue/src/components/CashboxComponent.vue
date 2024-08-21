<template>
    <div class="Cashbox">
        <div class="Cashbox__Column">
            <Cards name="Vstupy" :value="RevenueEntries" />
            <TableComponent :items="entryData" />
        </div>
        <div class="Cashbox__Column">
            <Cards name="Supplement" :value="RevenueBar" />
            <TableComponent :items="inventoryData" />
        </div>
        <div class="Cashbox__Column">
            <Cards name="Permice" :value="RevenuePermission" />
            <TableComponent :items="permissionData" />
        </div>
        <div class="Cashbox__Column">
                <button @click="confirm">Reset</button>
            </div>
    </div>
</template>

<script setup lang="jsx">
import { ref, reactive, watchEffect } from 'vue';
import TableComponent from './TableComponent.vue';
import inventoryDataRaw from '@/Supports/Data/Inventory';
import entryDataRaw from '@/Supports/Data/Entries';
import permissionDataRaw from '@/Supports/Data/Permission';

// Zajištění reaktivity dat a přidání počítadla
const makeReactiveData = (data) => {
  return reactive(
    data.map((item) => ({
      ...item,
      count: 0, // Inicializace počítadla pro každou položku
    }))
  );
};

const inventoryData = makeReactiveData(inventoryDataRaw);
const entryData = makeReactiveData(entryDataRaw);
const permissionData = makeReactiveData(permissionDataRaw);

const RevenueBar = ref(0);
const RevenueEntries = ref(0);
const RevenuePermission = ref(0);

// Funkce pro výpočet celkového výdělku
const calculateRevenue = (data) => {
  return data.reduce((total, item) => total + item.price * (item.qty + item.count), 0);
};

// Funkce pro resetování počítadla a přepočet hodnot
const confirm = () => {
  // Resetování count pro všechny tabulky
  resetCount(entryData);
  resetCount(inventoryData);
  resetCount(permissionData);

  // Aktualizace hodnot pro Cards
  RevenueBar.value = calculateRevenue(inventoryData);
  RevenueEntries.value = calculateRevenue(entryData);
  RevenuePermission.value = calculateRevenue(permissionData);
};

// Pomocná funkce pro resetování počítadla
const resetCount = (data) => {
  data.forEach((item) => (item.count = 0));
};

// Sledování dat a aktualizace hodnot
watchEffect(() => {
  RevenueBar.value = calculateRevenue(inventoryData);
  RevenueEntries.value = calculateRevenue(entryData);
  RevenuePermission.value = calculateRevenue(permissionData);
});
// Komponenta Cards
const Cards = ({ name, value }) => {
    return (
        <div class="Cards">
            <div class='Cards__Row'>
                <h5>{name}</h5>
                <strong>{value} Kč</strong>
            </div>
        </div>
    );
};
</script>

<style lang="scss">
@import '../assets/styles/variables.scss';
.Cashbox{
    padding: 6px 12px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    &__Column{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
.Table{
    width: 100%;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    tr{
        font-size: 1.5rem;
        width: 100%;
        &:nth-child(even){
            background-color: #f0f0f0;
        }
    }
    th{
        align-items: flex-start;
    }
    td{
      
      text-align: center;
    }
}
.Cards{
    width: 100%;
    border: 1px solid #c5c5c5;
    border-radius: 10px;
    &__Row{
        padding: 12px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
        h5{
            font-size: 2rem;
            margin: 24px;
            font-weight: 500;
        }
        strong{
            font-size: 1.5rem;
            font-weight: 400;
            border: 10px solid $highlight-Tcolor;
            border-radius: 50%;
            padding: 30px 4px;
        }
    }
}
</style>
