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
      friend: {
        id: "Nabeel",
        name: "Nabeel Anwar",
        phone: "090 0786 01",
        email: "nabeel@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavourite() {},
  },
};
</script>

<style></style>
