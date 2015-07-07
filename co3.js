var co = require('co');
var fs = require('mz/fs');



co(function* () {
    return Promise.all([fs.readFile('co1.js', 'utf8'), fs.readFile('co.js', 'utf8'), fs.readFile('co3.js', 'utf8')]);
})
.then(function(files){
    for (var file of files) {
        console.log(file);
    }
})
.catch(function(err){
    console.log(err);
});