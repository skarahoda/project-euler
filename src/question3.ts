import { getPrimeFactorization } from './prime';

export const getLargestPrimeFactor = (value: number): number => (
  getPrimeFactorization(value).sort((a, b) => b - a)[0]
);
