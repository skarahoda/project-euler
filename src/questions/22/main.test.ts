import { sumNameScores } from './main';
import { namesFromQuestion } from './fixture';

describe('sumNameScores', () => {
  it.each`
    case                          | input                | expected
    ${'contains one letter only'} | ${['C']}             | ${3}
    ${'contains two letters'}     | ${['C', 'A']}        | ${7}
    ${'from question'}            | ${namesFromQuestion} | ${871198282}
  `(
    'should return $expected when input $case',
    ({ input, expected }) => {
      expect(sumNameScores(input)).toBe(expected);
    },
  );
});
