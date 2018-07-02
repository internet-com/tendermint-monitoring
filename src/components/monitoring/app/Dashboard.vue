<template>
  <div>
    <div class="columns">
      <div class="column is-3">
        <last-block></last-block>
      </div>
    </div>
    <!-- cols -->
    <div class="columns">
      <div class="column">
        <tree-view :data="data"></tree-view>
      </div>
    </div>
  </div>
</template>

<script>
import LastBlock from '../parts/LastBlock';

export default {
  computed: {
    data() {
      return this.$store.state.data.status.getData();
    },
  },
  components: {
    LastBlock,
  },
};
</script>
