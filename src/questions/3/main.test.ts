import { getLargestPrimeFactor } from './main';

describe('getLargestPrimeFactor', () => {
  it('should return the answer', () => {
    expect(getLargestPrimeFactor(600851475143)).toBe(6857);
  });
});
