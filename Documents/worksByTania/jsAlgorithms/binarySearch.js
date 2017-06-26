function binarySearch(arr, target) {
  var min = 0,
    max = arr.length - 1,
    guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (arr[guess] === target) {
      return guess;
    } else if (arr[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
}

console.log(binarySearch([2,4,6,7,9],5))
