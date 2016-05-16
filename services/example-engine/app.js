
var config = require('config');

function doWork() {
  console.log('staying alive. keeping busy.');
}

var runLoop = setInterval(doWork,5000);

process.on('SIGINT', function() {
  clearInterval(runLoop);
});
