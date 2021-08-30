import { sumOfEvenFibonacci } from './question2';

describe('sumOfTwoMultiples', () => {
  it.each`
        limit | expected
        ${0}  | ${0}
        ${2}  | ${2}
        ${8}  | ${10}
        ${40}  | ${44}
        ${4000000}  | ${4613732}
    `('should return $expected when the limit is $limit and the multiplyBy parameters are 3 and 5', ({ limit, expected }) => {
    expect(sumOfEvenFibonacci(limit)).toBe(expected);
  });
});
