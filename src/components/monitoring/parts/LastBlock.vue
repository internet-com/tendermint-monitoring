<template>
  <div :class="['column', sizeClass]">
    <box :header="'Latest Block'">
      <div slot="content">
        {{ syncInfo }}
      </div>
    </box>
  </div>
</template>

<script>
import Box from '../../elements/Box';

export default {
  props: {
    size: {
      type: Number,
      default: 3,
    },
  },
  components: {
    Box,
  },
  computed: {
    data() {
      return this.$store.state.data.status.getData();
    },
    sizeClass() {
      return `is-${this.size}`;
    },
    syncInfo() {
      if (this.data) {
        return this.data.sync_info;
      }

      return null;
    },
  },
};
</script>

<style scoped>
</style>
