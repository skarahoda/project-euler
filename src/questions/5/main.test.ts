import { smallestMultiple } from './main';

describe('smallestMultiple', () => {
  it.each`
        max    | expected
        ${2}   | ${2}
        ${3}   | ${6}
        ${4}   | ${12}
        ${5}   | ${60}
        ${6}   | ${60}
        ${7}   | ${420}
        ${8}   | ${840}
        ${9}   | ${2520}
        ${10}  | ${2520}
        ${20}  | ${232792560}
    `('should return $expected when the max is $max and', ({ max, expected }) => {
    expect(smallestMultiple(max)).toBe(expected);
  });
});
