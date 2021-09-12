const getMaxNumber = (numberOfDigits: number) => (
  Number(
    Array.from(
      { length: numberOfDigits },
      () => '9',
    ).join(''),
  )
);

const isPalindromeNumber = (n: number): boolean => {
  const digits = n.toString().split('');
  const { length } = digits;
  const max = Math.floor(length / 2);
  for (let i = 0; i < max; i += 1) {
    if (digits[i] !== digits[length - i - 1]) {
      return false;
    }
  }
  return true;
};

export const getLargestPalindromeProduct = (numberOfDigits: number): number => {
  let result = -1;
  const maxProduct = getMaxNumber(numberOfDigits);
  const minProduct = getMaxNumber(numberOfDigits - 1);
  for (let i = maxProduct; i > minProduct; i -= 1) {
    if (i * i < result) {
      return result;
    }
    for (let j = i; j > minProduct; j -= 1) {
      if (i * j < result) {
        break;
      }
      if (isPalindromeNumber(i * j)) {
        result = i * j;
      }
    }
  }
  return maxProduct;
};
