export const findFirstNDigitsOfSum = (nums: [BigInt, ...BigInt[]], n: number): number => {
  // @ts-ignore
  const sum = nums.reduce((acc, num) => acc + num, 0n);
  const sumStr = sum.toString();
  return Number(sumStr.slice(0, n));
};
