import { sumSquareDifference } from './main';

describe('sumSquareDifference', () => {
  it.each`
        max   | expected
        ${1}  | ${0}
        ${2}  | ${4}
        ${3}  | ${22}
        ${10} | ${2640}
        ${100} | ${25164150}
    `('should return $expected when the max is $max and', ({ max, expected }) => {
    expect(sumSquareDifference(max)).toBe(expected);
  });
});
