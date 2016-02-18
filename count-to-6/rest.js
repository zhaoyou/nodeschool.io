module.exports = function average(...args) {
  var sum = args.reduce((index, init) => index + init, 0);
  return sum/args.length;
}
