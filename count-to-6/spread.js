var t = process.argv.slice(2);//Array.prototype.slice.apply(process.argv[2], 0);
console.log(`The minimum of [${t}] is ${Math.min(...t)}`);
