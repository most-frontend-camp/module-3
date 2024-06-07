# Data types:

8 типов данных - 7 примитивные и 1 ссылочные `object`.

### Practice with number

practice with number
```javascript
let n = 1000;
console.log(n);
n = 100.4;
console.log(n);
```

Number features with Infinity, -Infinity, NaN_
```javascript
console.log(1231231/0);
console.log(-1231231/0);
console.log(n * 'it is Nuar');
console.log('it is Nuar'/2);
```

Infinity and -Infinity are type of `number`
```javascript
console.log('-');
console.log(NaN);
console.log(NaN* 10);
console.log(NaN/0);
console.log(NaN-123123);
```
NaN means Not a Numbers it is also datatype of `number`.

### Practice with bigInt
```javascript
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
```

### Strings
```javascript
const str1 = 'Single quotes';
const str2 = "Double quotes";
const str3 = `Sample message - is ${2+98} approach`;
console.log(str3);
```

### Boolean

```javascript
let nameFieldChecked = true;
let ageFieldChecked = false;

const transferRealMadrid = 800;
const transferChealsea = 1500;
console.log(transferRealMadrid > transferRealMadrid);
```

### Null, undefined

```javascript
let phoneNumber = null;
console.log(phoneNumber);

phoneNumber = '87072603434';
console.log(phoneNumber);

let phoneNumberUndefined; // undefined -> не определено
console.log(phoneNumberUndefined);
```
* если переменной не присвоили значение - undefined
* если переменной должно быть `null` - то нужно явно присвоить

### Practice with Symbol 

```javascript
const sym1 = Symbol();
const sym2 = Symbol("I am forward player");
const sym3 = Symbol("I am forward player");

// console.log(sym1 === sym2);
// console.log(sym2 === sym3);
```

### Practice with `typeof`

Можно проверить тип данных с помощью оператора `typeof`:
```javascript
console.log(typeof 0);              // "number"
console.log(typeof true);           // "boolean"
console.log(typeof "Привет, мир!"); // "string"
console.log(typeof undefined);      // "undefined"
console.log(typeof Symbol('id'));   // "symbol"
```

`console.log(typeof null);` and `console.log(typeof {});`, both will return the object.

`console.log(typeof console.dir);` and `console.log(typeof Math);` console, Math are builtin object datatypes in Javascript.

### Working with strings

```javascript
const hello = 'Privet!';
const char1 = hello.charAt(0);
console.log(char1);
console.log(hello[0]);

const char2 = hello.charAt(1);
console.log(char2);

console.log(hello.charAt(hello.length - 1));
``` 

### преобразование в другие типы данных

```javascript
// number преобразование
console.log(typeof(+'5'));
console.log(Number('5'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

// string преобразование
console.log(typeof(String(1232134)));
console.log(typeof(String(123 +'')));
console.log(typeof(String(true)));
```

### Homework

Подумать в команде почему так происходит
```javascript
console.log(5 - '5');
console.log(5 + 5);
console.log(5 * '5');
console.log('five' * '5');
console.log(5 + true);
console.log(5 + undefined);
console.log(5 + null);
```
