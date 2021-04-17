const app = Vue.createApp({

  data() {
    return {
      fromChild: ''
    }
  },
  methods: {
    onChildClick(value) {
      this.fromChild = value
      alert("Submitted Successfully.")
    }
  }
})

app.component('button-counter', {
  data() {
    return {
      count: 0,
      form: {
        name: "vijay",
        phoneNo: "4567890",
        email: "vijay.t@fasoftwares.com",
        message: "test"
      }
    }
  },
  methods: {
    childMethod() {
      this.$emit('increment', this.form);
    }
  },
  template: `
    <input type="text" name="name" v-model="form.name" placeholder="name">
    <input type="text" name="phoneNo" v-model="form.phoneNo" placeholder="phoneNo">
    <input type="email" name="email" id="email" v-model="form.email" placeholder="email">
    <input type="text" name="message" v-model="form.message" placeholder="message">
    <button type="button" @click="childMethod()">Submit</button> `
})

app.mount('#app')