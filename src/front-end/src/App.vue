<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="40%" />
    <HelloWorld
      msg="War is peace,
Freedom is slavery,
Ignorance is strength"
    />
    <button v-on:click="getRoomsInMyArea">Get rooms in my area</button
    ><br /><br />
    <button v-on:click="createNewRoom">Create room</button><br /><br />
    <input v-model="radius" placeholder="room radius in meters" />
    <input v-model="roomName" placeholder="room name" />
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
  data: function () {
    return {
      radius: null,
      roomName: "",
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
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
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
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
