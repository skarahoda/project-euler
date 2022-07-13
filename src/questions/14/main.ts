export const getLengthOfCollatzSequence = (n: number): number => {
  let result = 1;
  let current = n;
  while (current !== 1) {
    if (current % 2 === 0) {
      current /= 2;
    } else {
      current = current * 3 + 1;
    }
    result += 1;
  }
  return result;
};

export const findLongestCollatzSequence = (n: number): number => {
  let result = {
    value: 1,
    length: 1,
  };
  for (let i = n; i > 1; i -= 1) {
    const length = getLengthOfCollatzSequence(i);
    if (length > result.length) {
      result = {
        value: i,
        length,
      };
    }
  }
  return result.value;
};
