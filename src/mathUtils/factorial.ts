const factorials = [1n];

export const factorial = (n: number): bigint => {
  while (factorials.length <= n) {
    // @ts-ignore
    factorials.push(BigInt(factorials.length) * factorials[factorials.length - 1]);
  }
  return factorials[n];
};
