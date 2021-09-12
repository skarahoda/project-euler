export const smallestMultiple = (max: number): number => {
  let result = 2;
  for (let i = 3; i <= max; i += 1) {
    const mod = result % i;
    if (mod !== 0 && i % mod === 0) {
      result *= (i / mod);
    } else if (mod !== 0) {
      result *= i;
    }
  }
  return result;
};
