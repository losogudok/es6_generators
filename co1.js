var co = require('co');
var fs = require('fs');
var file = process.argv[2];

co(function* () {
  try {
    var x = yield new Promise(function(resolve, reject){
        fs.readFile(file, function(err, result){
            if (err) {
                return reject(err);
            }
            resolve(result.toString('utf8'));
        });
    });
  } catch (err) {
    console.log(err);
  }
  console.log(x);
});