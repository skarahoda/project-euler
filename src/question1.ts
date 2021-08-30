/**
 * Finds the largest number below the limit and multiple by the parameter.
 * Then finds the sum with following equation
 * x + 2x + 2x + ... + ax = a((x * (x +1)) / 2)
 * @param limit
 * @param multipleBy
 */
export const sumOfMultiples = (limit: number, multipleBy: number): number => {
    const coefficient = ((limit - 1) / multipleBy) >> 0;
    return multipleBy * ((coefficient * (coefficient +1)) / 2);
}

export const sumOfTwoMultiples = (limit: number, firstMultipleBy: number, secondMultipleBy: number) => {
  const firstSum = sumOfMultiples(limit, firstMultipleBy);
  const secondSum = sumOfMultiples(limit, secondMultipleBy);
  const doubledSum = sumOfMultiples(limit, firstMultipleBy * secondMultipleBy);

  return firstSum + secondSum - doubledSum;
}
