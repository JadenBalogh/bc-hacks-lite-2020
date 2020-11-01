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

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function getRoomsAtLocation(location) {
  db.collection('rooms')
    .get()
    .then((results) => {
      results.forEach((doc) => {
        const data = doc.data();
        console.log(`${data.name}, ${data.radius}, ${data.participantCount}`);
      });
    });
}

function createRoom(name, size) {
  db.collection('rooms').add({
    name: name,
    size: size,
  });
}
