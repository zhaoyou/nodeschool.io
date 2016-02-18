module.exports = function makeCounter(someObj) {
  var i = 0;
  someObj.next = function() {
     var done = i++ >= 10 ? true : false;
     if (done){i = undefined;}
     return {
       'done': done,
       'value':i
     }
  }
}
