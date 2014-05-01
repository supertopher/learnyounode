var fs   = require('fs');
var path = (process.argv[2]);
var data = fs.readFileSync(path);
var str  = data.toString();

console.log(str.split('\n'));
