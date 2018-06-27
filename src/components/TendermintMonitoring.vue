<template>
  <div id="tm-monitoring">
    <!-- <div class="container"> -->
      <div class="columns is-gapless">
        <div class="column is-2 side-menu">
          <monitoring-menu></monitoring-menu>
        </div>
        <div class="column">
          <monitoring></monitoring>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import MonitoringMenu from './menu/MonitoringMenu';
import Monitoring from './monitoring/Monitoring';

export default {
  components: {
    MonitoringMenu,
    Monitoring,
  },
};
</script>

<style>
#tm-monitoring {
  /* padding: 1.3rem; */
}

.side-menu {
  position: relative;
  background-color: #293037;
  box-shadow: 1px 0 2px 0 rgba(0,0,0,0.50);
  z-index: 100;
}
</style>
