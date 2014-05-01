var myArgs     = process.argv.slice(2);
var totalValue = 0;

myArgs.forEach(function (value, index) {
  totalValue += Number(value);
});

console.log(totalValue);
