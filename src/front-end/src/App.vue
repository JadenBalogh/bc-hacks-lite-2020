<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#"
        ><img
          src="./assets/compass1.png"
          style="width: 70px; height: auto"
          alt="compass"
        />
        <span class="mt-auto" style="font-size: xx-large">
          GeoChat</span
        ></b-navbar-brand
      >
      <img class="ml-auto" src="./assets/github_iconSmall.png" />
    </b-navbar>

    <!-- <img alt="Vue logo" src="./assets/logo.png" />-->
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="2">
          <ChatRoomNav msg="Chat Room Navigation" />

          <button v-on:click="getLocation">Get my location</button>
          <a-date-picker :defaultValue="moment()"
        /></b-col>
        <b-col cols="10"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ChatRoomNav from "./components/ChatRoomNav.vue";
import moment from "moment";
import { version } from "ant-design-vue";

export default {
  name: "App",

  components: {
    ChatRoomNav,
  },
  data() {
    return {
      moment,
      version,
    };
  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i");
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


