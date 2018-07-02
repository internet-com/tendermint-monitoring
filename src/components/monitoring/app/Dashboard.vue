<template>
  <div>
    <tree-view :data="data"></tree-view>
  </div>
</template>

<script>
import TreeView from 'vue-json-tree-view';
import Vue from 'vue';

Vue.use(TreeView);

export default {
  conponents: {
    TreeView,
  },
  computed: {
    data() {
      return this.$store.state.data.status.getData();
    },
  },
};
</script>
