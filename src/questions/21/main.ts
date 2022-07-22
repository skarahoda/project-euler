import { sum } from '../../mathUtils';

const getProperDivisors = (value: number): number[] => {
  const squareRoot = Math.min(Math.ceil(Math.sqrt(value)), value - 1);
  const properDivisors = [1];
  for (let i = 2; i <= squareRoot; i += 1) {
    if (value % i === 0) {
      properDivisors.push(i);
      if (value / i !== i) {
        properDivisors.push(value / i);
      }
    }
  }
  return properDivisors;
};

const results = new Map<number, number>();

const getSumOfProperDivisors = (value: number): number => {
  if (results.has(value)) {
    return results.get(value);
  }
  const sumOfProperDivisors = sum(...getProperDivisors(value));
  results.set(value, sumOfProperDivisors);
  return sumOfProperDivisors;
};

const isAmicable = (value: number): boolean => {
  const sumOfProperDivisors = getSumOfProperDivisors(value);
  return sumOfProperDivisors !== value && getSumOfProperDivisors(sumOfProperDivisors) === value;
};

export const sumOfAmicableNumbers = (limit: number): number => {
  let result = 0;
  for (let i = 2; i < limit; i += 1) {
    if (isAmicable(i)) {
      result += i;
    }
  }
  return result;
};
