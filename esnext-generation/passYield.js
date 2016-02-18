module.exports = function *multiplier() {
      // `yield` all integers multiplied by the value passed in via `.next()`
      var i = 1,num = 1;
      yield i;
      while(true) {
        i += 1;
        num = yield num * i;
      }
}
