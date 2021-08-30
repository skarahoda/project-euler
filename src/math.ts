export const isDividedBy = (value: number, dividedBy: number): boolean => value % dividedBy === 0;
export const isEven = (value: number): boolean => isDividedBy(value, 2);
