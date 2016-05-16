
var express = require('express');
var config = require('config');
var port = config.get('api.port');
var greetings = require('../../lib/greetings.js').greetings;
var app = express();

app.get('/', function (req, res) {
  console.log('processing request /');
  res.send(greetings.helloWorld());
});

var server = app.listen(port, function () {
  console.log('express listening on port', port);
});

module.exports = server;

