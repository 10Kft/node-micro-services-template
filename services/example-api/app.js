var config = require('config');
var express = require('express');
var greetings = require('../../lib/greetings.js').greetings;

var app = express();
var port = config.get('api.port');

app.get('/', function (req, res) {
  console.log('processing request /');
  res.send(greetings.helloWorld());
});

app.listen(port, function () {
  console.log('Example app listening on port', port);
});


process.on('SIGINT', function() {
  // do cleanup
});
