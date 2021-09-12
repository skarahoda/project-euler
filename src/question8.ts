import { product } from './math';

export const findMaxGreatestProductOfAdjacentDigits = (
  n: number | bigint,
  numberOfDigits: number,
) => {
  const digits = n.toString().split('').map((digit) => Number(digit));
  let currentProduct = product(...digits.slice(0, numberOfDigits));
  let result = currentProduct;
  for (let i = numberOfDigits; i < digits.length; i += 1) {
    currentProduct = (
      currentProduct === 0
        ? product(...digits.slice(i + 1 - numberOfDigits, i + 1))
        : (currentProduct * digits[i]) / digits[i - numberOfDigits]
    );
    result = Math.max(currentProduct, result);
  }
  return result;
};
