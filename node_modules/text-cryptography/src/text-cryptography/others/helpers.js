const getPrimes = (n, returnString = false) => {
  let primes = [];


  for (let x = 2; x <= n + 1; x++) {
    let isPrimeNum = true;

    for (let y = 2; y < x; y++) {
      if (x % y == 0) {
        isPrimeNum = false;
        break;
      }
    }

    if (isPrimeNum) {
      primes.push((returnString) ? (x).toString() : x)
    }
  }

  return primes;
}




module.exports = {
  getPrimes: getPrimes
}