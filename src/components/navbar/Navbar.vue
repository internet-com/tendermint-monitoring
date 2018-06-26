<template>
  <div class="nav-section">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    </nav>

    <hero></hero>
  </div>
</template>

<script>
import Hero from './Hero';

export default {
  components: {
    Hero,
  },
};
</script>

<style scoped>
.nav-section {
  margin-bottom: 60px;
}
</style>
