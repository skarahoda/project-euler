import { findHighlyDivisibleTriangularNumber } from './main';

describe('findHighlyDivisibleTriangularNumber', () => {
  it.each`
        numberOfDivisors | expected
        ${1}             | ${1}
        ${2}             | ${3}
        ${3}             | ${6}
        ${3}             | ${6}
        ${5}             | ${28}
        ${500}           | ${76576500}
    `(
    'should return $expected when the numberOfDivisors is $numberOfDivisors',
    ({
      numberOfDivisors,
      expected,
    }) => {
      expect(findHighlyDivisibleTriangularNumber(numberOfDivisors)).toBe(expected);
    },
  );
});
