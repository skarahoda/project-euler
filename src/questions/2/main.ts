import { getFibonacci, isEven } from '../../mathUtils';

export const sumOfEvenFibonacci = (limit: number): number => {
  let sum = 0;
  for (let i = 1; getFibonacci(i) <= limit; i += 1) {
    const fibonacci = getFibonacci(i);
    if (isEven(fibonacci)) {
      sum += fibonacci;
    }
  }
  return sum;
};
