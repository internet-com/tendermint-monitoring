<template>
  <div class="monitoring-menu">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li v-for="(item, index) in generalMenu" :key="index">
          <a :class="{ 'is-active' : item === currentApp }">{{ capitalize(item) }}</a>
        </li>
      </ul>

      <p class="menu-label">
        Detail
      </p>
      <ul class="menu-list">
        <li v-for="(item, index) in detailMenu" :key="index">
          <a :class="{ 'is-active' : item === currentApp }">{{ capitalize(item) }}</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      generalMenu: ['dashboard', 'network-info', 'consensus-state'],
      detailMenu: ['blocks', 'transactions', 'valudators'],
    };
  },
  computed: {
    currentApp() {
      return this.$store.state.app;
    },
  },
  methods: {
    capitalize(str) {
      const strArray = str.split('-');
      for (let i = 0; i < strArray.length; i += 1) {
        strArray[i] = strArray[i].charAt(0).toUpperCase().concat(strArray[i].substr(1));
      }
      return strArray.join(' ');
    },
  },
};
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
