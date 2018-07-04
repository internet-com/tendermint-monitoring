<template>
  <panel is-full-page :header="capitalize(app)">
    <dashboard v-if="app === 'dashboard'" slot="body"></dashboard>
    <network-info v-if="app === 'network-info'" slot="body"></network-info>
    <consensus-state v-if="app === 'consensus-state'" slot="body"></consensus-state>
    <validators v-if="app === 'validators'" slot="body"></validators>
    <blocks v-if="app === 'blocks'" slot="body"></blocks>
  </panel>
</template>

<script>
import Panel from '../elements/Panel';
import capitalize from '../../utils/Capitalize';
import Dashboard from './app/Dashboard';
import NetworkInfo from './app/NetworkInfo';
import ConsensusState from './app/ConsensusState';
import Validators from './app/Validators';
import Blocks from './app/Blocks';

export default {
  components: {
    Panel,
    Dashboard,
    NetworkInfo,
    ConsensusState,
    Validators,
    Blocks,
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
