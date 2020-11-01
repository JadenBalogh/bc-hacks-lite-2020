<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button v-on:click="getRoomsInMyArea">Get my location</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import * as axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    getRoomsInMyArea() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        axios({
          method: "post",
          url: "http://localhost:3000",
          data: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
        });
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
