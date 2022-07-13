import { factorial } from './factorial';

describe('factorial', () => {
  it.each`
            input            | expected
            ${1}             | ${1n}
            ${2}             | ${2n}
            ${3}             | ${6n}
            ${4}             | ${24n}
            ${5}             | ${120n}
            ${6}             | ${720n}
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
