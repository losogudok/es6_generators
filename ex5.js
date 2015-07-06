var fs = require('fs');

function run (generator) {
  var it = generator(callbcack);

  function callbcack(err, result) {
    if (err) {
      it.throw(err);
    }
    else {
      it.next(result);
    }
  }

  it.next();
}

run(function* (callbcack) {
  var dirFiles;
  var firstFile;
  // catch exception
  try {
    dirFiles = yield fs.readdir('NoNoNoNo', callbcack); // No such dir  
    firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
  }
  catch(e) {
    firstFile = null;
  }
  console.log(firstFile);
 });