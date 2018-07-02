<template>
  <div id="tm-monitoring">
    <div class="columns is-gapless">
      <div class="column is-2 side-menu">
        <monitoring-menu></monitoring-menu>
      </div>
      <div class="column">
        <monitoring></monitoring>
      </div>
    </div>
  </div>
</template>

<script>
import MonitoringMenu from './menu/MonitoringMenu';
import Monitoring from './monitoring/Monitoring';

export default {
  props: ['app'],
  components: {
    MonitoringMenu,
    Monitoring,
  },
  watch: {
    app() {
      this.setApp(this.app);
    },
  },
  methods: {
    setApp(app) {
      this.$store.commit('setApp', app);
    },
  },
  mounted() {
    this.setApp(this.app);
    this.$store.commit('fetchData');
    // this.$store.dispatch('autoFetchData');
  },
};
</script>

<style>
.side-menu {
  background-color: #383f46;
  box-shadow: 1px 0 0px 0 rgba(0,0,0,0.50);
  z-index: 100;
}
</style>
