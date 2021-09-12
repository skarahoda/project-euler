import { isDividedBy } from './math';

export const getPrimeFactorization = (value: number): number[] => {
  const squareRoot = Math.min(Math.ceil(Math.sqrt(value)), value - 1);
  for (let i = 2; i <= squareRoot; i += 1) {
    if (isDividedBy(value, i)) {
      return [
        ...getPrimeFactorization(i),
        ...getPrimeFactorization(value / i),
      ];
    }
  }
  return [value];
};
