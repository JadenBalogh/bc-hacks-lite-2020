<template>
  <div class="chatRooms">
    <h4>{{ msg }}</h4>
    <b-table hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: "ChatRoomNav",
  data() {
    return {
      items: [
        { name: "Starbucks", diameter: 40 + "m", participants: 3 },
        { name: "UBCO Campus", diameter: 10 + "km", participants: 50 },
        { name: "Kelowna", diameter: 40 + "km", participants: 7000 },
        { name: "UBCO Library", diameter: 150 + "m", participants: 24 },
      ],
    };
  },

  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chatRooms {
  margin: 2rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
