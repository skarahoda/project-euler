const isComposite = (n: number, dividedBys: number[]): boolean => (
  dividedBys.some((dividedBy) => n % dividedBy === 0)
);

export const sumOfPrimes = (max: number): number => {
  const primes = [2, 3];
  let currentNumber = 5;
  while (currentNumber < max) {
    if (!isComposite(currentNumber, primes)) {
      primes.push(currentNumber);
    }
    currentNumber += 2;
    if (currentNumber < max && !isComposite(currentNumber, primes)) {
      primes.push(currentNumber);
    }
    currentNumber += 4;
  }
  return primes.reduce((a, b) => a + b);
};

const findNextPrime = (sieve: boolean[], latestPrime: number): number => (
  sieve.findIndex((isPrime, i) => i > latestPrime && isPrime)
);

export const sumOfPrimesWithSieve = (max: number): number => {
  const sieve = Array.from({ length: max + 1 }, () => true);
  sieve[0] = false;
  sieve[1] = false;
  const limit = Math.ceil(Math.sqrt(max));
  let latestPrime = 2;
  while (latestPrime < limit) {
    for (let i = latestPrime * 2; i <= max; i += latestPrime) {
      sieve[i] = false;
    }
    latestPrime = findNextPrime(sieve, latestPrime);
  }
  return sieve.reduce(
    (accumulator, isPrime, value) => (
      isPrime
        ? accumulator + value
        : accumulator
    ),
    0,
  );
};
