const factorials = [1];

export const factorial = (n: number): number => {
  while (factorials.length <= n) {
    factorials.push(factorials.length * factorials[factorials.length - 1]);
  }
  return factorials[n];
};
