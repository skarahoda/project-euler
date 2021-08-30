const fibonacciNumbers = [1, 2];

export const getFibonacci = (i: number): number => {
  if (fibonacciNumbers[i] === undefined) {
    fibonacciNumbers[i] = getFibonacci(i - 2) + getFibonacci(i - 1);
  }
  return fibonacciNumbers[i];
};
