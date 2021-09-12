import { findProductOfSpecialPythagoreanTriplet } from './main';

describe('findProductOfSpecialPythagoreanTriplet', () => {
  it('should return the answer', () => {
    expect(findProductOfSpecialPythagoreanTriplet(1000)).toBe(31875000);
  });
});
