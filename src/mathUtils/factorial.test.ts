import { factorial } from './factorial';

describe('factorial', () => {
  it.each`
            input            | expected
            ${1}             | ${1}
            ${2}             | ${2}
            ${3}             | ${6}
            ${4}             | ${24}
            ${5}             | ${120}
            ${6}             | ${720}
        `(
    'should return $expected when the input is $input',
    ({
      input,
      expected,
    }) => {
      expect(factorial(input)).toBe(expected);
    },
  );
});
