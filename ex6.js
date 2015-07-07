function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  // your code goes here
  var it = generator();

  function next() {
    var promise = it.next().value;  
    if (promise.then) {
      promise
        .then(function(result){
          it.next(result);
        })
        .catch(function(err){
          it.throw(err);
        });
    }
  }
  next();
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log(foo);
});
