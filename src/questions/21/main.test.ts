import { sumOfAmicableNumbers } from './main';

describe('sumOfAmicableNumbers', () => {
  it.each`
    input    | expected
    ${1}     | ${0}
    ${2}     | ${0}
    ${221}   | ${220}
    ${10000} | ${31626}
  `(
    'should return $expected when the input is $input',
    ({ input, expected }) => {
      expect(sumOfAmicableNumbers(input)).toBe(expected);
    },
  );
});
