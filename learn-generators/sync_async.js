
var fs = require('fs');

function run (generator) {
  var it = generator(go);
  // improve `run` above
  function go(err, result) {
    if (err)  it.next([null]); else it.next(result);
  }

  go();
}

run(function* (done) {
  try {
  // catch exception
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    console.log(firstFile);
  } catch (e) {}

});

/**
offical solution.

var fs = require('fs');

    function run (generator) {
      var it = generator(go);

      function go (err, result) {
        if (err) return it.throw(err);
        it.next(result);
      }

      go();
    }

    run(function* (done) {
      var firstFile;
      try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        firstFile = dirFiles[0];
      } catch (err) {
        firstFile = null;
      }

      console.log(firstFile);
    });
  */
