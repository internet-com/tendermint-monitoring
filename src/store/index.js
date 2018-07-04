import Vue from 'vue';
import Vuex from 'vuex';
import TendermintData from './structure/TendermintData';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: null,
    data: {
      status: new TendermintData('/status'),
      netInfo: new TendermintData('/net_info'),
      consensusState: new TendermintData('dump_consensus_state'),
      validators: new TendermintData('/validators'),
      blocks: new TendermintData('/block'),
    },
  },
  getters,
  mutations,
});
