import { factorial, sum } from '../../mathUtils';

export const getNumberOfCombination = (...parts: [number, ...number[]]): number => (
  factorial(sum(...parts)) / parts.reduce((a, b) => factorial(a) * factorial(b))
);
