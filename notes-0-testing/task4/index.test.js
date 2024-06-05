const firstVowel = require("./index");

describe("firstVowel", () => {

    test('Adding NaN and NaN should equal false', () => {
        expect(firstVowel('hello')).toEqual(1);
    });

    test('Adding NaN and NaN should equal false', () => {
        expect(firstVowel('apple')).toEqual(0);
    });

    test('Adding NaN and NaN should equal false', () => {
        expect(firstVowel('string')).toEqual(3);
    });
});