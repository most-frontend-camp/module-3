function sum(n){
    if (n ===1) return 1; // base case
    return n + sum(n - 1);
    // n === 1, sum(1) = 1 + 0 = 1
    // n === 2, sum(2) = 2 + sum (2-1) = 2 +sum(1) = 3
}

function factorial(n){
    if (n ===1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(sum(5)) // 15
// 1 + 2 + 3 + 4 + 5 = 15

console.log(sum(1)) // 1

console.log(sum(12)) // 78