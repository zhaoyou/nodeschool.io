
//var first = function() {
//  return Promise.resolve('secret value');
//};
//
//
//
//// Your solution here
//first().then(function(data) { return Promise.resolve(data);})
//     .then(function(result) { console.log(result);});

/**

 */


'use strict';

/* global first, second */

var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

// As an alternative to the code above, ou could also do this:
// first().then(second).then(console.log);
