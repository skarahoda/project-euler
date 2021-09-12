import { getNthPrime } from './main';

describe('getNthPrime', () => {
  it.each`
        n        | expected
        ${1}     | ${2}
        ${2}     | ${3}
        ${3}     | ${5}
        ${4}     | ${7}
        ${5}     | ${11}
        ${6}     | ${13}
        ${7}     | ${17}
        ${8}     | ${19}
        ${9}     | ${23}
        ${10}    | ${29}
        ${10001} | ${104743}
    `('should return $expected when the max is $max and', ({ n, expected }) => {
    expect(getNthPrime(n)).toBe(expected);
  });
});
