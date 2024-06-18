function calculate(num1, num2, operator){
    return operator(num1, num2);
}

console.log(calculate(8, 2, (num1, num2) => num1 + num2)) // 10

console.log(calculate(8, 2, (num1, num2) => num1 - num2)) // 6

console.log(calculate(8, 2, (num1, num2) => num1 * num2)) // 16

console.log(calculate(8, 2, (num1, num2) => num1 / num2)) // 4