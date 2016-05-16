
var express = require('express');
var config = require('config');
var port = config.get('api.port');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

var server = app.listen(port, function () {
  console.log('express listening on port', port);
});

module.exports = server;
