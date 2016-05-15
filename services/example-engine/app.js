var config = require('config');

function doWork() {
  console.log('staying alive. keeping busy.');
}

var runLoop = setInterval(doWork,5000);

process.on('SIGINT', function() {
  clearInterval(runLoop);

  // setTimeout(function() {
  //  // TODO What is the corect way to cleanup, then exit on SIGINT?
  //  process.exit(0);
  // }, 300);
});
