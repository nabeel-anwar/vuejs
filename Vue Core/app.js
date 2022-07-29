const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    resetInput() {
      this.firstName = "";
      this.lastName = "";
    },
  },
  computed: {
    fullName() {
      if (this.firstName === "" || this.lastName === "") {
        return "";
      } else {
        return this.firstName + " " + this.lastName;
      }
    },
  },
  watch: {
    counter(value) {
      if (value > 50 || value < -50) {
        this.counter = 0;
      }
    },
  },
});

app.mount("#events");
