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
    <!-- <DoughnutChart :chartData="doughnutTestData" :options="doughnutOption" /> -->
    <!-- <LineChart :chartData="vaccineLineData" :options="lineOption" /> -->
    <VacTotalChart :vaccineTotalData="vaccineTotalData" />
    <VacDayChart
      :vacLabel="vacLabel"
      :firstData="firstData"
      :secondData="secondData"
      :thirdData="thirdData"
    />
  </section>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

import { Chart, registerables } from 'chart.js';

import VacTotalChart from './VacTotalChart.vue';
import VacDayChart from './VacDayChart.vue';

Chart.register(...registerables);

export default {
  name: 'Main',
  components: {
    VacTotalChart,
    VacDayChart,
  },
  props: {},
  setup() {
    const vacLabel = ref([]);
    const firstData = ref([]);
    const secondData = ref([]);
    const thirdData = ref([]);
    const vaccineTotalData = ref([]);

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

    return {
      vaccineTotalData,
      vacLabel,
      firstData,
      secondData,
      thirdData,
    };
  },
};
</script>

<style></style>
