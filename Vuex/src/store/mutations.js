export default {
  setAuth(state, payload) {
    state.isLogin = payload.auth;
  },
};
