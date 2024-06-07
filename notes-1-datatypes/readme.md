# Data types:

8 типов данных - 7 примитивные и 1 ссылочные `object`.

### Practice with number

let n = 1000;
console.log(n);
n = 100.4;
console.log(n);

// Infinity, -Infinity, NaN

console.log(1231231/0);
console.log(-1231231/0);

// Infinity and -Infinity are type of `number`

console.log(n * 'it is Nuar');
console.log('it is Nuar'/2);


console.log('-');
console.log(NaN);
console.log(NaN* 10);
console.log(NaN/0);
console.log(NaN-123123);

// NaN means Not a Numbers it is also data type of `number`


### Practice with bigInt

console.log(Number.MAX_SAFE_INTEGER);
// 2 ** 53  - 1, maximum number
console.log(Number.MIN_SAFE_INTEGER);
// - (2 ** 53  - 1), maximum number


const bigInt = 123211241204010202400124041010404104419007199254740991;
console.log(bigInt);

const a = 5555n;
const b = 4444n;
console.log(a-b);
console.log(a/b);

### Strings 


const str1 = 'Single quotes';
const str2 = "Double quotes";
const str3 = `Sample message - is ${2+98} approach`;
console.log(str3);

### Boolean

let nameFieldChecked = true;
let ageFieldChecked = false;

const transferRealMadrid = 800;
const transferChealsea = 1500;
console.log(transferRealMadrid > transferRealMadrid);

### Null, undefined
let phoneNumber = null;
console.log(phoneNumber);

phoneNumber = '87072603434';
console.log(phoneNumber);

let phoneNumberUndefined; // undefined -> не определено
console.log(phoneNumberUndefined);

// если переменной не присвоили значение - undefined
// если переменной должно быть `null` - то нужно явно присвоить

### Practice with Symbol 
const sym1 = Symbol();
const sym2 = Symbol("I am forward player");
const sym3 = Symbol("I am forward player");

// console.log(sym1 === sym2);
// console.log(sym2 === sym3);


### Practice with `typeof`
console.log(typeof 0);              // "number"
console.log(typeof true);           // "boolean"
console.log(typeof "Привет, мир!"); // "string"
console.log(typeof undefined);      // "undefined"
console.log(typeof Symbol('id'));   // "symbol"


console.log(typeof null);
console.log(typeof {});
// both will return the object

console.log(typeof console.dir);
console.log(typeof Math);
// console, Math are builtin object datatypes in Javascript.


### Homework

```javascript
console.log(5 - '5');
console.log(5 + 5);
console.log(5 * '5');
console.log('five' * '5');
console.log(5 + true);
console.log(5 + undefined);
console.log(5 + null);
```