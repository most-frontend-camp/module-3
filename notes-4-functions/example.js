function power(a, n) {
    if( n === 0) {
        return 1;
    }
    return a**n;
    // return a*power(a, n - 1);
}


console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16