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
  <button v-on:click="test">test</button>
  <section>
    <DoughnutChart :chartData="doughnutTestData" :options="doughnutOption" />
    <LineChart :chartData="vaccineLineData" :options="lineOption" />
  </section>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';

import { DoughnutChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';

import { shuffle } from 'lodash';

Chart.register(...registerables);

export default {
  name: 'Main',
  components: {
    DoughnutChart,
    LineChart,
  },
  props: {},
  setup() {
    let temp = ref([1, 2, 3, 4, 5]);
    const doughnutRef = ref();
    const lineRef = ref();

    const vacLabel = ref([]);
    const firstData = ref([]);
    const secondData = ref([]);
    const thirdData = ref([]);
    const vaccineTotalData = ref([]);

    function test() {
      temp.value = shuffle(temp.value);
    }

    async function getVaccine() {
      const tempTotalData = [];
      const tempFirstData = [];
      const tempSecondData = [];
      const tempThirdData = [];

      await axios
        .get('http://192.168.0.21:3000/api/vaccine?sido=전국')
        .then((res) => {
          // 차수 별 총 접종 수를 최신 일자로 가져오기
          let newInfo = res.data[res.data.length - 1];
          tempTotalData.push(
            newInfo.total_first,
            newInfo.total_second,
            newInfo.total_third
          );

          // 날짜 순으로 차수 별 접종 data 가져오기
          res.data.map((v) => {
            const date = new Date(v.date);
            console.log(date);

            vacLabel.value.push(
              date.getMonth() + 1 + '월' + date.getDate() + '일'
            );
            tempFirstData.push(v.first);
            tempSecondData.push(v.second);
            tempThirdData.push(v.third);
          });
        })
        .catch((e) => console.log(e));

      firstData.value = tempFirstData;
      secondData.value = tempSecondData;
      thirdData.value = tempThirdData;
      vaccineTotalData.value = tempTotalData;
    }

    onMounted(async () => {
      await getVaccine();
    });

    // Doughnut용
    const doughnutTestData = computed(() => ({
      labels: ['1차 백신', '2차 백신', '3차 백신'],
      datasets: [
        {
          data: vaccineTotalData.value,
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
        },
      ],
    }));
    const doughnutOption = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: '백신 차수별 총 접종 그래프',
        },
      },
    });

    const vaccineLineData = computed(() => ({
      labels: vacLabel.value,
      datasets: [
        {
          label: '1차 백신',
          data: firstData.value,
          pointBackgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#77CEFF',
          pointBorderColor: 'black',
        },
        {
          label: '2차 백신',
          data: secondData.value,
          pointBackgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'red',
          pointBorderColor: 'black',
        },
        {
          label: '3차 백신',
          data: thirdData.value,
          pointBackgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#333333',
          pointBorderColor: 'black',
        },
      ],
    }));
    const lineOption = ref({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: '차수별 접종 추이',
        },
      },
    });

    return {
      vaccineLineData,
      temp,
      doughnutRef,
      lineRef,
      doughnutTestData,
      doughnutOption,
      vaccineTotalData,
      lineOption,
      test,
    };
  },
};
</script>

<style></style>
