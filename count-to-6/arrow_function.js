var inputs = process.argv[2].slice(2);
var result = inputs.map(x => x.substring(0,1)).join('');
console.log(result);