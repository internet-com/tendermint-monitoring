import Vue from 'vue';
import Vuex from 'vuex';
import TendermintData from './structure/TendermintData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: null,
    status: new TendermintData('/status'),
  },
  mutations: {
    setApp(state, app) {
      state.app = app;
    },
    fetchStatus: async (state) => {
      await state.status.getData();
    },
  },
});
