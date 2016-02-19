function *flat (arr) {
      // your code goes here
      for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
          yield *flat(arr[i]);
        } else {
          yield arr[i];
        }
      }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
