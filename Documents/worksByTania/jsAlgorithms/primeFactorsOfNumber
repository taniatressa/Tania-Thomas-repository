
function getPrimeFactorOfNumber(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return false;
  }
  var divisor = 2,
    factors = [];

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor
    } else {
      divisor++;
    }

  }
  return factors;
}

console.log(getPrimeFactorOfNumber(210))



