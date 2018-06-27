<template>
  <div class="monitoring-menu">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a class="is-active">Dashboard</a></li>
        <li><a>Network info</a></li>
        <li><a>Consensus State</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.monitoring-menu {
  padding: 1.4rem 0.7rem 0.7rem 0.7rem;
}

.menu {
  font-weight: 800 !important;
}

.menu-label {
  color: hsl(171, 100%, 41%);
}

.menu-list a {
  color: #afb8c3;
}

.menu-list li {
  margin-bottom: 5px;
}

.is-active {
  background-color: hsl(171, 100%, 41%) !important;
  color: #FFFFFF !important;
}

a:hover {
  color: #363636;
}
</style>
