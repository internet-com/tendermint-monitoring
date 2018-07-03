<template>
  <div :class="['column', sizeClass]">
    <box :header="'Latest Block'">
      <div class="box-content" slot="content">
        <p>Height: {{ latestBlockHeight }}</p>
        <p>{{ latestBlockTime }}</p>
      </div>
    </box>
  </div>
</template>

<script>
import moment from 'moment';
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
    sizeClass() {
      return `is-${this.size}`;
    },
    data() {
      return this.$store.state.data.status.getData();
    },
    syncInfo() {
      if (this.data) {
        return this.data.sync_info;
      }

      return null;
    },
    latestBlockHeight() {
      if (this.syncInfo) {
        return this.syncInfo.latest_block_height;
      }

      return NaN;
    },
    latestMoment() {
      if (this.syncInfo) {
        return moment(this.syncInfo.latest_block_time);
      }

      return null;
    },
    latestBlockTime() {
      if (this.latestMoment) {
        return this.latestMoment.fromNow();
      }

      return NaN;
    },
  },
};
</script>

<style>
.box-content {
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
