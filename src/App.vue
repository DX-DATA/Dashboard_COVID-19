<template>
  <div id="app" class="wrapper">
    <DashBoard></DashBoard>
  </div>
</template>

<script>
import DashBoard from './components/DashBoard.vue';

export default {
  name: 'App',
  components: {
    DashBoard,
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>
