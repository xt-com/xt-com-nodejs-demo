const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const Api = require('./api');
Api(app);

app.get('/', function (req, res) {
  console.log("Hello World");
  res.send('Hello World');
});

const server = app.listen(8888, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("node start http://%s:%s", host, port);
});