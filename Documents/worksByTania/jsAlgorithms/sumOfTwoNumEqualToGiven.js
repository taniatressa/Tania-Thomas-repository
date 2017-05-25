function sumOfTwoNumEqualToGiven(arr, sum) {
  var obj = {},
    i, arrLength = arr.length,
    subtract = 0;
  for (i = 0; i < arrLength; i++) {
    subtract = sum - arr[i];
    if (obj[subtract]) return true
    else obj[arr[i]] = 1;
  }
  return false;
}

console.log(sumOfTwoNumEqualToGiven([1, 2, 3, 6], 9))
