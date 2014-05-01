var fs   = require('fs');
var path = (process.argv[2]);
var data = fs.readFileSync(path, 'utf8');

console.log(data.split('\n').length - 1);
