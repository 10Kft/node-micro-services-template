var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('processing request /');
  res.send('Hello World!');
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001');
});