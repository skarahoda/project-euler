const findLargestProductInRows = (grid: number[][], numberOfElements: number): number => {
  const { length } = grid;
  let result = -Infinity;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - numberOfElements + 1; j += 1) {
      let product = 1;
      for (let k = 0; k < numberOfElements; k += 1) {
        product *= grid[i][j + k];
      }
      result = Math.max(result, product);
    }
  }
  return result;
};

const findLargestProductInColumns = (grid: number[][], numberOfElements: number): number => {
  const { length } = grid;
  let result = -Infinity;
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length - numberOfElements + 1; j += 1) {
      let product = 1;
      for (let k = 0; k < numberOfElements; k += 1) {
        product *= grid[j + k][i];
      }
      result = Math.max(result, product);
    }
  }
  return result;
};

const findLargestProductInDiagonalsDownRight = (
  grid: number[][],
  numberOfElements: number,
): number => {
  const { length } = grid;
  let result = -Infinity;
  for (let i = 0; i <= length - numberOfElements; i += 1) {
    for (let j = 0; j <= length - numberOfElements; j += 1) {
      let product = 1;
      for (let k = 0; k < numberOfElements; k += 1) {
        product *= grid[i + k][j + k];
      }
      result = Math.max(result, product);
    }
  }
  return result;
};

const findLargestProductInDiagonalsDownLeft = (
  grid: number[][],
  numberOfElements: number,
): number => {
  const { length } = grid;
  let result = -Infinity;
  for (let i = numberOfElements - 1; i < length; i += 1) {
    for (let j = 0; j <= length - numberOfElements; j += 1) {
      let product = 1;
      for (let k = 0; k < numberOfElements; k += 1) {
        product *= grid[i - k][j + k];
      }
      result = Math.max(result, product);
    }
  }
  return result;
};

export const findLargestProductInGrid = (grid: number[][], numberOfElements: number): number => (
  Math.max(
    findLargestProductInRows(grid, numberOfElements),
    findLargestProductInColumns(grid, numberOfElements),
    findLargestProductInDiagonalsDownRight(grid, numberOfElements),
    findLargestProductInDiagonalsDownLeft(grid, numberOfElements),
  )
);
