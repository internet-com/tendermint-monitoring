<template>
  <div class="box has-background-primary has-text-white">
    <div class="monitoring-content">
      <p class="box-header title is-3 has-text-white">{{ header }}</p>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: 'Header',
    },
  },
};
</script>

<style scoped>
.box-header {
  margin-bottom: 0.7rem;
}
.monitoring-content {
  margin: 0.7rem;
}
</style>
