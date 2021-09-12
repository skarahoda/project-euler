import { sumOfPrimesWithSieve } from './main';

describe('sumOfPrimes', () => {
  it('should return the answer', () => {
    expect(sumOfPrimesWithSieve(2000000)).toBe(142913828922);
  });
});
