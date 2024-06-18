function basicCalculator(a, operator, b) {
    if (operator === '/') {
        return b === 0 ? null : a/b;
    }
    if (operator === '+') {
        return a+b;
    }
}

console.log(basicCalculator(1, '/', 0)) // null
console.log(basicCalculator(2, '/', 11)) // null
