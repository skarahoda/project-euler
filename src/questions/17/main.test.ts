import { getLetterCount, sumOfLetterCount } from './main';

describe('getLetterCount', () => {
  it.each`
            input            | expected
            ${1}             | ${3}
            ${2}             | ${3}
            ${3}             | ${5}
            ${10}            | ${3}
            ${11}            | ${6}
            ${20}            | ${6}
            ${23}            | ${11}
            ${100}           | ${10}
            ${160}           | ${18}
            ${212}           | ${19}
            ${1000}          | ${11}
        `(
    'should return $expected when the input is $input',
    ({
      input,
      expected,
    }) => {
      expect(getLetterCount(input)).toBe(expected);
    },
  );
});

describe('sumOfLetterCount', () => {
  it.each`
            input            | expected
            ${1}             | ${3}
            ${2}             | ${6}
            ${3}             | ${11}
            ${9}             | ${36}
            ${1000}          | ${21124}
        `(
    'should return $expected when the input is $input',
    ({
      input,
      expected,
    }) => {
      expect(sumOfLetterCount(input)).toBe(expected);
    },
  );
});
