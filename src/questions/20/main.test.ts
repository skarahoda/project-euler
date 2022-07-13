import { sumOfFactorialDigits } from './main';

describe('sumOfFactorialDigits', () => {
  it.each`
    input     | expected
    ${10n}    | ${27}
    ${100n}   | ${648}
  `(
    'should return $expected when the input is $input.',
    ({
      input,
      expected,
    }) => {
      expect(sumOfFactorialDigits(input)).toBe(expected);
    },
  );
});
