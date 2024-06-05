const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    // expect(sum(11, 22)).toBe(33);
});

test('adds 11 + 22 to equal 33', () => {
    expect(sum(11, 22)).toBe(33);
});

test('adds 111 + 222 to equal 333', () => {
    expect(sum(111, 222)).toBe(333);
});