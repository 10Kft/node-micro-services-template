var config = require('config');

var express = require('express');
var app = express();
var port = config.get('api.port');
app.get('/', function (req, res) {
  console.log('processing request /');
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port', port);
});


process.on('SIGINT', function() {
  // do cleanup
});
