import { factorial, sum } from '../../mathUtils';

export const getNumberOfCombination = (...parts: [number, ...number[]]): number => (
  Number(factorial(sum(...parts)))
  / parts.reduce((a, b) => Number(factorial(a)) * Number(factorial(b)))
);
