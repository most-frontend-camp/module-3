function makeAdder(x) {
    // параметр `x` - внутренняя переменная

    // внутренняя функция `add()` использует `x`, поэтому
    // у нее есть "замыкание" на нее
    function add(y) {
        return y + x;
    }

    return add;
}

let plusOne  = makeAdder(1);
console.log(plusOne);

let plusTen  = makeAdder(10);
console.log(plusTen);

console.log(plusOne(3)); // 4
console.log(plusOne(41));
console.log(plusTen(13));