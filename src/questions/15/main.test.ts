import { getNumberOfCombination } from './main';

describe('getNumberOfPermutations', () => {
  it.each`
            inputs           | expected
            ${[1]}           | ${1}
            ${[2]}           | ${1}
            ${[1, 1]}        | ${2}
            ${[2, 2]}        | ${6}
            ${[20, 20]}      | ${137846528820}
        `(
    'should return $expected when the inputs are $inputs',
    ({
      inputs,
      expected,
    }) => {
      expect(getNumberOfCombination(...(inputs as [number, ...number[]]))).toBe(expected);
    },
  );
});
