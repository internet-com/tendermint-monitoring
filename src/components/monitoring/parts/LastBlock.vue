<template>
  <div :class="['column', sizeClass]">
    <box :header="'Latest Block'">
      <div class="box-content" slot="content">
        <p>Height: {{ latestBlock.height }}</p>
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
      default: 4,
    },
  },
  components: {
    Box,
  },
  computed: {
    sizeClass() {
      return `is-${this.size}`;
    },
    latestBlock() {
      return this.$store.getters.latestBlock;
    },
    latestBlockTime() {
      if (this.latestBlock) {
        return moment(this.latestBlock.time).fromNow();
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
