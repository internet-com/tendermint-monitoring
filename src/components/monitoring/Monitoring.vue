<template>
  <panel is-full-page header='Dashboard'>
    <dashboard slot="body"></dashboard>
  </panel>
</template>

<script>
import Panel from '../elements/Panel';
import Dashboard from './app/Dashboard';

export default {
  components: {
    Panel,
    Dashboard,
  },
};
</script>
