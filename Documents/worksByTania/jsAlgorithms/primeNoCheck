function isPrime(n) {
  var divisor = 3,
    limit = Math.sqrt(n);
  if (typeof n !== 'number' || !Number.isInteger(n))
    return false;
  //checking simple cases
  if (n === 2 || n === 3)
    return true;
  //checking for even no
  if (n < 2 || n % 2 === 0)
    return false;

  while (n < limit) {
    if (n % divisor === 0)
      return false;
    else
      divisor += 2;

  }
  return true;

}

console.log(isPrime(267));

//----------Sieve of Eratosthenes algorithm  --------------------

function isPrimeVal(val) {
  var primes = [];
  for (var i = 2; i < val; i++) {
    primes[i] = true;
  }
  var limit = Math.sqrt(val)
  for (var i = 2; i < limit; i++) {
    if (primes[i] === true) {
      for (var j = i * i; j < val; j += i) {
        primes[j] = false;
      }//inner for
    }//if
  }//outer for
  
  for(var i=0;i<val;i++){
  if(primes[i] == true){
  console.log(i + ' ' +primes[i])
  }
  }
}
isPrimeVal(20);
