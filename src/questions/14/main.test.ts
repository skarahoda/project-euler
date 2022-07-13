import { findLongestCollatzSequence, getLengthOfCollatzSequence } from './main';

describe('getLengthOfCollatzSequence', () => {
  it.each`
        input            | expected
        ${1}             | ${1}
        ${2}             | ${2}
        ${3}             | ${8}
        ${4}             | ${3}
        ${5}             | ${6}
    `(
    'should return $expected when the input is $input',
    ({
      input,
      expected,
    }) => {
      expect(getLengthOfCollatzSequence(input)).toBe(expected);
    },
  );
});

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
