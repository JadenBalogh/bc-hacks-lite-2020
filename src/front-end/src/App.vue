<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button v-on:click="getLocation">Get my location</button>
    <a-date-picker :defaultValue="moment()" />
    <Layout>
      <Header> test </Header>
    </Layout>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import moment from "moment";
import { version } from "ant-design-vue";

export default {
  name: "App",

  components: {
    HelloWorld,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


