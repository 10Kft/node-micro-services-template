process.env.NODE_CONFIG_DIR = process.cwd() + '/config/env';

var config = require('config');
console.log(config);

/* Also useful to only get Service-specific config:
  var config = require('config').get('engine');
*/

function doWork() {
  //console.log('staying alive. keeping busy.');
}

setInterval(doWork,5000);
