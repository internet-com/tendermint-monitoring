<template>
  <panel is-full-page :header="capitalize(app)">
    <dashboard v-if="app === 'dashboard'" slot="body"></dashboard>
    <network-info v-if="app === 'network-info'" slot="body"></network-info>
  </panel>
</template>

<script>
import Panel from '../elements/Panel';
import capitalize from '../../utils/Capitalize';
import Dashboard from './app/Dashboard';
import NetworkInfo from './app/NetworkInfo';

export default {
  components: {
    Panel,
    Dashboard,
    NetworkInfo,
  },
  computed: {
    app() {
      return this.$store.state.app;
    },
  },
  methods: {
    capitalize,
  },
};
</script>
