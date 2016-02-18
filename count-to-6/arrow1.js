var inputs = process.argv.slice(2);
var a = inputs.map(o => o.substring(0, 1)).reduce((index, str) => index + str );
console.log(`[${inputs}] becomes "${a}"`);
