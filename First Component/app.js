const app = Vue.createApp({
  data() {},
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsVisible" >
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
    `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        name: "Abdul Aziz",
        phone: "01234 5678 991",
        email: "aziz@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
