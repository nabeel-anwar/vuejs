<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Fav)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <span>|</span>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <ul v-if="detailsVisible">
      <li><strong>phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:['name', 'phoneNumber', 'emailAddress', 'isFavourite'],
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
    },
    isFavourite: {
      type: Boolean,
      require: false,
    },
  },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavourite() {
      this.$emit("favourite-toggled", this.id);
    },
  },
};
</script>

<style></style>
