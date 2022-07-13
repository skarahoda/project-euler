import { factorial, sum } from '../../mathUtils';

export const sumOfFactorialDigits = (input: number): number => {
  const digits = BigInt(factorial(input)).toString().split('').map(Number);
  return sum(...digits);
};
