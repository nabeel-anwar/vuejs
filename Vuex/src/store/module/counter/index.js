import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

const counter = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
};

export default counter;
