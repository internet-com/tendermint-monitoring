import Vue from 'vue';
import Vuex from 'vuex';
import TendermintData from './structure/TendermintData';
import fetchDataInterval from '../utils/FetchDataInterval';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: null,
    data: {
      status: new TendermintData('/status'),
      netInfo: new TendermintData('/net_info'),
      consensusState: new TendermintData('dump_consensus_state'),
    },
  },
  mutations: {
    setApp(state, app) {
      state.app = app;
    },
    fetchData: async (state) => {
      Object.keys(state.data).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(state.data, key)) {
          fetchDataInterval(state.data[key]);
        }
      });
    },
  },
});
