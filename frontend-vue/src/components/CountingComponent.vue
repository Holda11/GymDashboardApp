<script>
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registrace komponentů potřebných pro barový graf
Chart.register(BarController, BarElement, CategoryScale, LinearScale);

export default {
  mounted() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
</script>


<template>
  <div class="Counting">
    <div class="Counting__Row">
      <h3>Přehled</h3>
      <button>Srpen</button>
    </div>
    <div class="Counting__Chart">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import '../assets/styles/variables.scss';
.Counting{
    display: flex;
    flex-direction: column;
    padding: 6px 12px;
    width: 70%;
    height: 100%;
    border: 1px solid #c5c5c5;
    border-radius: 12px;
   
    &__Chart{
        width: 100%;
    }
    &__Row{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
