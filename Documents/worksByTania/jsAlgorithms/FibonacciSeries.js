function FibonacciSeries(n) {
  if (n <= 1)
    return n;
  else {
    return FibonacciSeries(n - 1) + FibonacciSeries(n - 2)
  }

}
console.log(FibonacciSeries(12))
//below algorithm gets the sequence in an array
function FibSeq( n) {
  var fibArray = [0, 1];
  if (n <= 1)
    return fibArray;
  else {
    for (var i = 2; i < n; i++) {
      fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
  }
}
console.log(FibSeq(12))
