<template>
  <div>
    <box></box>
  </div>
</template>

<script>
import Box from '../../elements/Box';

export default {
  components: {
    Box,
  },
  computed: {
    syncInfo() {
      return this.$store.state.data.status.getData().sync_info;
    },
  },
};
</script>
