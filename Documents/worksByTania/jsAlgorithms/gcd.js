function greatestCommonDivisor(a, b) {
  var divisor = 2,
    gcd = 1;

  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor === 0 && b % divisor === 0) {
      gcd = divisor
    }
    divisor++;
  }
  return gcd;
}

console.log(greatestCommonDivisor(14, 21))

//------------------Using recursion---------------------
//Euclid's algorithm

function gdcUsingRecurrsion(a, b) {
  if (!b) {
    return a;
  }
  //here when we recurse we swap the inpu argument and we pass the remainder a%b as the 2nd argument
  return gdcUsingRecurrsion(b, a % b);
}

console.log(gdcUsingRecurrsion(14, 21));

//---to calculate gcd for more than 2 val----

function calculateGcdOfArrayValues(arr) {
  var i = 0,b;
  var a = arr[i];
  while (i < arr.length) {
    if (arr[i + 1]) {
      b = arr[i + 1];
      a = gdcUsingRecurrsion(a, b);
    } else {
      return a;
    }

    i++;
  }
}

console.log(calculateGcdOfArrayValues([27,90,72]))
