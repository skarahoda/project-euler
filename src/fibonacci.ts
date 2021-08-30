

const fibonacciNumbers = [1,2];

export const getFibonacci = (i: number): number => {
    return fibonacciNumbers[i] ?? (fibonacciNumbers[i] = getFibonacci(i-2) + getFibonacci(i-1));
}
