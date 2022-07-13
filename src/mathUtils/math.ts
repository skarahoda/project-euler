export const isDividedBy = (value: number, dividedBy: number): boolean => value % dividedBy === 0;
export const isEven = (value: number): boolean => isDividedBy(value, 2);
export const product = (...numbers: number[]): number => numbers.reduce((a, b) => a * b);
export const sum = (...numbers: number[]): number => numbers.reduce((a, b) => a + b);
