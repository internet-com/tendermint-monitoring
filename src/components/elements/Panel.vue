<template>
  <div class="panel" :class="{ 'is-full-page' : isFullPage }">
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
  },
};
</script>

<style scoped>
.panel {
  /* background-color: #FF0000; */
  /* background-color: #FAFAFA; */
  /* border-radius: 0.286rem; */
  margin: 0.7rem;
}

.panel-header {
  padding: 0.7rem 0.7rem 1.4rem 0.7rem;
}

.panel-body {
  padding: 0 0.7rem 0.7rem 0.7rem;
}

.is-full-page {
  min-height: 100vh;
}
</style>
