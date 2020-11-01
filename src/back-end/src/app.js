const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
const port = 3000;
const jsonParser = bodyParser.json();
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.post('/', jsonParser, function (req, res) {
  console.log(req.body);
});
