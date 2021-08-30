import { getFibonacci } from "./fibonacci";


describe("getFibonacci", () => {
    it("should return first fibonacci", () => {
        expect(getFibonacci(0)).toBe(1);
    });

    it("should return second fibonacci", () => {
        expect(getFibonacci(1)).toBe(2);
    });

    it("should return tenth fibonacci", () => {
        expect(getFibonacci(9)).toBe(89);
    });
})
