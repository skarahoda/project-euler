export const findMaxPath = (triangle: number[][]): number => {
  const lastRow = [...triangle[triangle.length - 1]];
  for (let i = triangle.length - 2; i >= 0; i -= 1) {
    for (let j = 0; j < triangle[i].length; j += 1) {
      lastRow[j] = Math.max(triangle[i][j] + lastRow[j], triangle[i][j] + lastRow[j + 1]);
    }
  }
  return lastRow[0];
};
