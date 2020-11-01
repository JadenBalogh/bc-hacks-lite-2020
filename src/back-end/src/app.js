const firebase = require('firebase');
require('firebase/firestore');
firebase.initializeApp({
  apiKey: 'AIzaSyDdU4dfOMEDHecTyCY_Wlq8eW7evE32MaE',
  authDomain: 'geochat-58056.firebaseapp.com',
  databaseURL: 'https://geochat-58056.firebaseio.com',
  projectId: 'geochat-58056',
  storageBucket: 'geochat-58056.appspot.com',
  messagingSenderId: '893618510153',
  appId: '1:893618510153:web:483b3cfaaad15e68976298',
  measurementId: 'G-M88VY6P805',
});
var db = firebase.firestore();
const geolib = require('geolib');

const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
const port = 3000;
const jsonParser = bodyParser.json();
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.post('/get-rooms-in-area', jsonParser, function (req, res) {
  console.log(req.body);
});

app.post('/create-room', jsonParser, function (req, res) {
  console.log(req.body);
});

createRoom('test', 50, {lat:0, lon:0});
getRoomsAtLocation({lat:0, lon:0}).then(rooms => {
  console.log(rooms);
});

function createRoom(name, radius, center) {
  db.collection('rooms').add({
    name: name,
    radius: radius,
    center: center,
    participantCount: 1,
  });
}

async function getRoomsAtLocation(location) {
  var rooms = [];
  await db
    .collection('rooms')
    .get()
    .then((results) => {
      results.forEach((doc) => {
        const data = doc.data();
        const room = {
          id: doc.id,
          name: data.name,
          radius: data.radius,
          center: data.center,
          participantCount: data.participantCount,
        };

        // calculate the distance from the input location to the center of each room
        var dist = geolib.getDistance(location, data.center);
        if (dist < room.radius) {
          rooms.push(room);
        }
      });
    });
  return rooms;
}
