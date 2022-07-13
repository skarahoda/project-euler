import { sum } from '../../mathUtils';

export const getPowerDigitSum = (n: number): number => {
  const power = BigInt(2 ** n);
  const digits = power.toString().split('').map(Number);
  return sum(...digits);
};
