import { findLongestCollatzSequence } from './main';

describe('findLongestCollatzSequence', () => {
  it.each`
            input            | expected
            ${1}             | ${1}
            ${2}             | ${2}
            ${3}             | ${3}
            ${4}             | ${3}
            ${5}             | ${3}
            ${999999}        | ${837799}
        `(
    'should return $expected when the input is $input',
    ({
      input,
      expected,
    }) => {
      expect(findLongestCollatzSequence(input)).toBe(expected);
    },
  );
});
