import { getPrimeFactorization } from '../../mathUtils';

export const getLargestPrimeFactor = (value: number): number => (
  getPrimeFactorization(value).sort((a, b) => b - a)[0]
);
