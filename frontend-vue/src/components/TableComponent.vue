<template>
    <table>
        <tbody>
            <tr>
                <th>Název</th>
                <th>Kategorie</th>
                <th>Cena</th>
                <th>Na skladě</th>
                <th>Akce</th>
            </tr>
            <tr v-for="item in items" :key="item.id">
                <td>{{ item.name || item.type + ' ' + item.category }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.qty }}</td>
                <td>
                    <button>+</button>
                    0
                    <button>-</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>

<style scoped>
table {
    /* Stylování tabulky */
}
</style>