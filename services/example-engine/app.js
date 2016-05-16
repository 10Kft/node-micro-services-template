
var config = require('config');
console.log('restarted...');

function doWork() {
  //console.log('staying alive. keeping busy.');
}

var intId = setInterval(doWork,5000);

process.on('SIGINT', function() {
  clearInterval(intId);
});
