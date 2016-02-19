/**
function askFoo () {
  return new Promise(function (resolve, reject) {
    console.log("resolve foo");
    resolve('foo');
  });
}

function run (generator) {
  // your code goes here
  var it = generator();
  it.next();
  it.next();
}

run(function* () {
  // improve: errors?
  var foo = yield askFoo();
  console.log('2');
  console.log(foo);
});
*/

// official solution below.

function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

function run (generator) {
  var it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });

  }

  go(it.next());
}

run(function* () {
  try {
    var foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
});
