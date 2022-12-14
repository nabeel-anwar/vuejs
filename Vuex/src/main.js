import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counter = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
};

const store = createStore({
  modules: {
    counterModule: counter,
  },
  state() {
    return {
      isLogin: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLogin = payload.auth;
    },
  },
  getters: {
    isAuth(state) {
      return state.isLogin;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { auth: true });
    },
    logout(context) {
      context.commit('setAuth', { auth: false });
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
