<template>
  <div>
    <tree-view :data="$store.state.data.netInfo.export()"></tree-view>
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
};
</script>
