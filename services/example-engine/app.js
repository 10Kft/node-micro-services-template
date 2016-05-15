//process.env.NODE_CONFIG_DIR = process.cwd() + '/config/env';

var config = require('config');
console.log(config);

/* Also useful to only get Service-specific config:
  var config = require('config').get('engine');
*/

function doWork() {
  //console.log('staying alive. keeping busy.');
}

var intId = setInterval(doWork,5000);



process.on('SIGINT', function() {
  // My process has received a SIGINT signal
  // Meaning PM2 is now trying to stop the process

  // So I can clean some stuff before the final stop
  clearInterval(intId);

  setTimeout(function() {
    // 300ms later the process kill it self to allow a restart
    //process.exit(0);
  }, 300);
});
