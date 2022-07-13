const getCollatzSequenceLength = (n: number, foundSequences: Map<number, number>): number => {
  let result = 0;
  let current = n;
  while (current >= n) {
    result += 1;
    if (current % 2 === 0) {
      current /= 2;
    } else {
      current = current * 3 + 1;
    }
  }
  return result + foundSequences.get(current);
};

export const findLongestCollatzSequence = (n: number): number => {
  let result = {
    value: 1,
    length: 1,
  };
  const foundSequences: Map<number, number> = new Map();
  foundSequences.set(1, 1);
  for (let i = 2; i <= n; i += 1) {
    const sequenceLength = getCollatzSequenceLength(i, foundSequences);
    foundSequences.set(i, sequenceLength);
    if (sequenceLength > result.length) {
      result = {
        value: i,
        length: sequenceLength,
      };
    }
  }
  return result.value;
};
