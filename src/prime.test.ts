import { getPrimeFactorization } from './prime';

describe('getPrimeFactorization', () => {
  it('returns the parameter when the parameter is a prime number', () => {
    expect(getPrimeFactorization(2)).toStrictEqual([2]);
  });

  it('returns correct result when the parameter is a square of a prime number', () => {
    expect(getPrimeFactorization(4)).toStrictEqual([2, 2]);
  });

  it('returns correct result when the parameter is a cube of a prime number', () => {
    expect(getPrimeFactorization(8)).toStrictEqual([2, 2, 2]);
  });

  it('returns correct result when the parameter is composite of two prime numbers', () => {
    expect(getPrimeFactorization(6)).toStrictEqual([2, 3]);
  });
});
