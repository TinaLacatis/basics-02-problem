const app = Vue.createApp({
  data() {
    return {
      name: "",
      showN: "",
      finalN: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    showName() {
      this.showN = this.name;
    },
    finalName() {
      this.finalN = this.name;
    },
  },
});
app.mount("#assignment");
