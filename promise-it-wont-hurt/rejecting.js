
var promise = new Promise(function (fulfill, reject) {
  // Your solution here
  setTimeout(function() { reject(new Error('REJECTED!'));}, 300);
});

function onReject (error) {
  // Your solution here
  console.log(error.message);
}

// Your solution here
promise.then(console.log, onReject);
