const findLargestNumber = require("./index");

describe("findLargestNumber", function() {
    it("test case 1", () => {
        const numbers = [5, 2, 9, 30, 12, 1, 0, 13];

        expect(findLargestNumber(numbers)).toBe(30);
    });
    it("test case 2", () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        expect(findLargestNumber(numbers)).toBe(10);
    });
    it("test case 3", () => {
        const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

        expect(findLargestNumber(numbers)).toBe(10);
    });
    it("test case 4", () => {
        const numbers = [1];

        expect(findLargestNumber(numbers)).toBe(1);
    });
});