<template>
  <div class="monitoring-menu">
    <aside class="menu">
      <div v-for="(menuGroup, i) in menu" :key="i">
        <p class="menu-label">
          {{ menuGroup.name }}
        </p>
        <ul class="menu-list">
          <li v-for="(item, index) in menuGroup.items" :key="index">
            <a
              v-on:click="setApp(item)"
              :class="{ 'is-active' : item === currentApp }" >
              {{ capitalize(item) }}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: 'General',
          items: ['dashboard', 'network-info', 'consensus-state'],
        },
        {
          name: 'Detail',
          items: ['blocks', 'transactions', 'validators'],
        },
      ],
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
    setApp(app) {
      this.$router.push({ path: app });
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
