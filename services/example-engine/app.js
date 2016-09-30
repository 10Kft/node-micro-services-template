
var config = require('config');
var intervalId = null;
function doWork() {
  console.log('staying alive. keeping busy.');
}

var runLoop = function(){
 intervalId = setInterval(doWork,5000);
}
process.on('SIGINT', function() {
  clearInterval(intervalId);
});

module.exports = runLoop
