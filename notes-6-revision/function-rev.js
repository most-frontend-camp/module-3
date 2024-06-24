function foo(){
    // common call method
}

let foo1 = function () {
    // анонимная функция
}

let foo2 = function bar() {
    //
}

let someFunc = (arg1, arg2, ...argN) => expression;

let sum = (a,b) => a + b;
console.log(sum(12,12));

let multi = (x, y) => {
    let result = x*y;
    return result;
}

console.log(multi(12,12));


let elements = ["a", "b", "c"];

elements.map((element) => {
    console.log(element);
});

