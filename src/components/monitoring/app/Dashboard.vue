<template>
  <div>
    <tree-view :data="data"></tree-view>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.data.status.getData();
    },
  },
};
</script>
