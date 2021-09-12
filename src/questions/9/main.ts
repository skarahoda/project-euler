export const findProductOfSpecialPythagoreanTriplet = (sum: number): number => {
  for (let a = 0; a < sum / 3; a += 1) {
    for (let b = a + 1; b < sum / 2; b += 1) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      if (a + b + c === sum) {
        return a * b * c;
      }
    }
  }
  return -1;
};
