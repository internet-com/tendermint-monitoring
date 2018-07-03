import fetchDataInterval from '../utils/FetchDataInterval';

const mutations = {
  setApp: (state, app) => {
    state.app = app;
  },
  fetchData: async (state) => {
    Object.keys(state.data).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(state.data, key)) {
        fetchDataInterval(state.data[key]);
      }
    });
  },
};

export default mutations;
