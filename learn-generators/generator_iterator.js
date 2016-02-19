function *factorial(n){
     // your code here
     var total = 1;
     for (i = 1; i <= n; i ++) {
       total *= i;
       yield total;
     }
}

for (var n of factorial(5)) {
  console.log(n)
}
