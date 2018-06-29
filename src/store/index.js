import Vue from 'vue';
import Vuex from 'vuex';
import TendermintData from './structure/TendermintData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: null,
    status: new TendermintData('/status'),
    netInfo: new TendermintData('/net_info'),
  },
  mutations: {
    setApp(state, app) {
      state.app = app;
    },
    fetchStatus: async (state) => {
      await state.status.getData();
    },
    fetchNetInfo: async (state) => {
      await state.netInfo.getData();
    },
  },
});
