<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#"
        ><img
          src="./assets/compass1.png"
          style="width: 80px; margin-bottom: 15px"
          alt="compass"
        />
        <span class="mt-auto" style="font-size: xx-large">
          GeoChat</span
        ></b-navbar-brand
      >
      <img class="ml-auto" src="./assets/github_iconSmall.png" />
    </b-navbar>

    <!-- <img alt="Vue logo" src="./assets/logo.png" />-->
    <b-container class="" fluid>
      <b-row>
        <b-col cols="4">
          <ChatRoomNav msg="Active Rooms" />
          <ChatRoomNav msg="Available Rooms" />
        </b-col>
        <b-col cols="8">
          <ChatRoom />
          <HelloWorld />
        </b-col>
      </b-row>
    </b-container>
    <button v-on:click="getLocation">Get my location</button>
    <a-date-picker :defaultValue="moment()" />

    <button v-on:click="getRoomsInMyArea">Get rooms in my area</button
    ><br /><br />
    <button v-on:click="createNewRoom">Create room</button><br /><br />
    <input v-model="radius" placeholder="room radius in meters" />
    <input v-model="roomName" placeholder="room name" />
  </div>
</template>

<script>
import ChatRoomNav from "./components/ChatRoomNav.vue";
import ChatRoom from "./components/ChatRoom.vue";
import moment from "moment";
import { version } from "ant-design-vue";

import * as axios from "axios";

export default {
  name: "App",

  components: {
    ChatRoomNav,
    ChatRoom,
  },

  data: function () {
    return {
      radius: null,
      roomName: "",
      moment,
      version,
    };
  },
  methods: {
    getRoomsInMyArea() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        axios({
          method: "post",
          url: "http://localhost:3000/get-rooms-in-area",
          data: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
        });
      });
    },
    createNewRoom() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        axios({
          method: "post",
          url: "http://localhost:3000/create-room",
          data: {
            userPosition: {
              lat: position.coords.latitude,
              long: position.coords.longitude,
            },
            roomRadius: this.radius,
            roomName: this.roomName,
          },
        });
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

.container {
  max-width: 100%;
}
</style>


