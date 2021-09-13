import { getPrimeFactorization } from '../../mathUtils';

interface PrimeFactorMap {
  [key: number]: number;
}

const getMappedPrimeFactors = (n: number): PrimeFactorMap => (
  getPrimeFactorization(n).reduce<PrimeFactorMap>(
    (accumulator, primeFactor) => {
      accumulator[primeFactor] = (accumulator[primeFactor] ?? 0) + 1;
      return accumulator;
    },
    {},
  )
);

export const findHighlyDivisibleTriangularNumber = (numberOfDivisors: number): number => {
  let n: number = 0;
  let primeFactorsOfN: PrimeFactorMap = {};
  let primeFactorsOfNPlus1: PrimeFactorMap = {};
  let currentNumberOfDivisors;
  do {
    n += 1;
    primeFactorsOfN = primeFactorsOfNPlus1;
    primeFactorsOfNPlus1 = getMappedPrimeFactors(n + 1);
    const allPrimeFactors = {
      ...primeFactorsOfN,
      ...primeFactorsOfNPlus1,
    };
    allPrimeFactors[2] -= 1;
    currentNumberOfDivisors = Object.values(allPrimeFactors)
      .map((i) => i + 1)
      .reduce((a, b) => a * b, 1);
  } while (currentNumberOfDivisors < numberOfDivisors);
  return (n * (n + 1)) / 2;
};
