// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import TreeView from 'vue-json-tree-view';
import App from './App';
import router from './router';
import store from './store';
import './assets/sass/main.scss';

Vue.use(TreeView);

Vue.config.productionTip = false;

// axios config
axios.defaults.baseURL = 'http://localhost:45000';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
