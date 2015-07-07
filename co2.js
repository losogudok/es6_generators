var co = require('co');
var fs = require('fs');


co(function* () {
    var x = yield new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('work');
        },1000);
    });
    return x;
}).then(function(value){
    console.log(value);
});