//missing number

function missingNumber(arr) {
  var n = arr.length + 1,
    sum = 0,
    expectedSum = n * (n + 1) / 2,
    i, len = arr.length;

  for (i = 0; i < len; i++) {
    sum += arr[i];
  }
  
  return expectedSum-sum;

}

console.log(missingNumber([3,5,2,4,7,1]))
