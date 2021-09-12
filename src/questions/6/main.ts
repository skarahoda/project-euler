const sumOfFirstN = (n: number): number => ((n * (n + 1)) / 2);
const sumOfFirstNSquare = (n: number): number => ((n * (n + 1) * ((2 * n) + 1)) / 6);

export const sumSquareDifference = (n: number): number => (
  (sumOfFirstN(n) ** 2) - sumOfFirstNSquare(n)
);
