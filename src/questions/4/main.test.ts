import { getLargestPalindromeProduct } from './main';

describe('getLargestPalindromeProduct', () => {
  it('should return 9009 when the numberOfDigits is 2', () => {
    expect(getLargestPalindromeProduct(2)).toBe(9009);
  });
  it('should return the answer when the numberOfDigits is 2', () => {
    expect(getLargestPalindromeProduct(3)).toBe(906609);
  });
});
