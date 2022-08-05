<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increase({ value: 10 })">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', { value: 10 });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    ...mapActions('counterModule', ['increase']),
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
