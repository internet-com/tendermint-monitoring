<template>
  <panel is-full-page :header="capitalize(app)">
    <dashboard slot="body"></dashboard>
  </panel>
</template>

<script>
import Panel from '../elements/Panel';
import Dashboard from './app/Dashboard';
import capitalize from '../../utils/Capitalize';

export default {
  components: {
    Panel,
    Dashboard,
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
