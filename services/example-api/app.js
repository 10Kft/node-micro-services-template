process.env.NODE_CONFIG_DIR = process.cwd() + '/config/env';

var config = require('config');
console.log(config);

/* Also useful to only get Service-specific config:
  var config = require('config').get('api');
*/

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
