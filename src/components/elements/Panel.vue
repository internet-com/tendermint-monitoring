<template>
  <div class="panel" v-bind:class="{ 'is-full-page' : isFullPage }">
    <div v-if="header" class="panel-header">
      <h1 class="title is-4">{{ header }}</h1>
    </div>
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
 </div>
</template>

<script>
export default{
  props: {
    isFullPage: {
      type: Boolean,
      default: false,
    },
    header: {
      type: String,
    },
    action: {
      type: String,
    },
  },
};
</script>

<style scoped>
.panel {
  /* background-color: #FF0000; */
  background-color: #FAFAFA;
  border-radius: 0.286rem;
  margin-bottom: 2.143rem;
}

.panel-header {
  padding: 1.3rem;
}

.panel-body {
  padding: 0 1.3rem 1.3rem 1.3rem;
}

.is-full-page {
  min-height: 90vh;
}
</style>
