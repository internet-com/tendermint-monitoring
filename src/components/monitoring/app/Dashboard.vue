<template>
  <div>
    <h1 class="subtitle">{{ $store.state }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('fetchStatus');
  },
};
</script>
