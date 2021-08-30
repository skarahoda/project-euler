import { getFibonacci } from "./fibonacci";
import { isEven } from "./math";


export const sumOfEvenFibonacci = (limit: number): number => {
    let sum = 0;
    for (let i = 1; getFibonacci(i) <= limit; i++) {
        const fibonacci = getFibonacci(i);
        if (isEven(fibonacci)) {
            sum += fibonacci;
        }
    }
    return sum;
}
