
var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  fulfill('PROMISE VALUE');
});

function onReject (error) {
  // Your solution here
  console.log(error.message);
}

// Your solution here
promise.then(console.log, onReject);

console.log('MAIN PROGRAM');
