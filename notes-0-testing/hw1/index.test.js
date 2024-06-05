const addTwoToEveryNumberInTheList = require("./index");

describe("addTwoToEveryNumberInTheList", () => {

    test('Adding 0 and 0 should equal 0', () => {
        expect(addTwoToEveryNumberInTheList([2, 3, 4, 6, 9, 1])).toEqual([4, 5, 6, 8, 11, 3]);
    });

    test('Adding 1000 and 1000 should equal 2000', () => {
        expect(addTwoToEveryNumberInTheList([1])).toEqual([3]);
    });

    test('Adding 1000 and 1000 should equal 2000', () => {
        expect(addTwoToEveryNumberInTheList([])).toEqual([]);
    });
});