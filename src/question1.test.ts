import { sumOfMultiples, sumOfTwoMultiples } from "./question1";


describe("sumOfMultiples", () => {
    it.each`
        limit | multipleBy | expected
        ${0}  | ${3}       | ${0}
        ${2}  | ${3}       | ${0}
        ${4}  | ${3}       | ${3}
        ${7}  | ${3}       | ${9}
        ${11} | ${3}       | ${18}
    `("should return $expected when the limit is $limit and the multiplyBy is $multipleBy",({ limit, multipleBy, expected }) => {
        expect(sumOfMultiples(limit, multipleBy)).toBe(expected);
    });
});

describe("sumOfTwoMultiples", () => {
    it.each`
        limit | expected
        ${0}  | ${0}
        ${2}  | ${0}
        ${4}  | ${3}
        ${7}  | ${14}
        ${10} | ${23}
        ${1000} | ${233168}
    `("should return $expected when the limit is $limit and the multiplyBy parameters are 3 and 5",({ limit, expected }) => {
        expect(sumOfTwoMultiples(limit, 3, 5)).toBe(expected);
    });
});
