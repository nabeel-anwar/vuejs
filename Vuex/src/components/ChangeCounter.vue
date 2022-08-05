<template>
  <button @click="increase({ value: 3 })">Increase 3</button>
  <button @click="increment">Async Inc 2</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   // this.$store.commit('increment');
    //   // this.$store.dispatch('increment'); //Run methods in actions
    // },
    ...mapActions('counterModule', ['increment', 'increase']),
  },
};
</script>
