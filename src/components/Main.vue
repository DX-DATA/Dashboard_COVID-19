<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
        </div>
      </div>
    </div>
  </nav>

  <section>
    <DoughnutChart :chartData="doughnutTestData" :options="doughnutOption" />
    <LineChart :chartData="lineTestData" />
  </section>
</template>

<script>
import { ref } from 'vue';
import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'Main',
  components: {
    DoughnutChart,
    LineChart,
  },
  props: {},
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    // Doughnut용
    const doughnutTestData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
          ],
        },
      ],
    };
    const doughnutOption = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart',
        },
      },
    });

    const lineTestData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          label: 'Contry',
          data: data.value,
          pointBackgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#77CEFF',
          pointBorderColor: 'blue',
        },
      ],
    };

    return { doughnutTestData, doughnutOption, lineTestData };
  },
};
</script>

<style></style>
