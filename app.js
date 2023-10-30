const app = Vue.createApp({
  data() {
    return {
      name: "",
      showedName: "",
      confirmedName: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World!");
    },
    showName(event) {
      this.showedName = event.target.value;
    },
    setName(event) {
      this.name = event.target.value;
    },
    finalName() {
      this.confirmedName = this.name;
    },
  },
});
app.mount("#assignment");
