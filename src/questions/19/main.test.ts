import { countSundays } from './main';

describe('countSundays', () => {
  it.each`
            start      | end     | expected
            ${1901}   | ${2001}  | ${171}
        `(
    'should return $expected when the dates are between $start and $end.',
    ({
      start,
      end,
      expected,
    }) => {
      expect(countSundays(start, end)).toBe(expected);
    },
  );
});
