module.exports = (str, count = `${str.length}`) => {
  return str + String.prototype.repeat.call('!', count);
}
