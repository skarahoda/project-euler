const isComposite = (n: number, dividedBys: number[]): boolean => (
  dividedBys.some((dividedBy) => n % dividedBy === 0)
);

export const getNthPrime = (n: number): number => {
  const primes = [];
  let currentNumber = 2;
  while (primes.length < n) {
    if (!isComposite(currentNumber, primes)) {
      primes.push(currentNumber);
    }
    currentNumber += 1;
  }
  return primes[primes.length - 1];
};
