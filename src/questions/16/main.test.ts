import { getPowerDigitSum } from './main';

describe('getPowerDigitSum', () => {
  it.each`
            input            | expected
            ${1}             | ${2}
            ${2}             | ${4}
            ${3}             | ${8}
            ${4}             | ${7}
            ${5}             | ${5}
            ${6}             | ${10}
            ${1000}          | ${1366}
        `(
    'should return $expected when the input is $input',
    ({
      input,
      expected,
    }) => {
      expect(getPowerDigitSum(input)).toBe(expected);
    },
  );
});
