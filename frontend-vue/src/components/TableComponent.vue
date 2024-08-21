<template>
  <table class='Table'>
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
        <td>{{ item.qty - item.count }}</td>
        <td>
          <button @click="increment(item)">+</button>
          {{ item.count }}
          <button :disabled="item.count === 0" @click="decrement(item)">-</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    function increment(item) {
      item.count++;
    }

    function decrement(item) {
      item.count--;
    }

    return { increment, decrement };
  }
}

</script>
