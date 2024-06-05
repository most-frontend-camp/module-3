# Practice
### `includes`, `indexOf`

```javascript
let ingredients = ["A", "B", "C"];
let foods = ["X", "B", "C", "B", "X"];

console.log(ingredients.includes("D"));
console.log(ingredients.includes("A"));
console.log(ingredients.indexOf("B"));

console.log(foods.indexOf("X"));
console.log(foods.indexOf("X", 2));
```
### `Join` and `reverse`
1. join -> creates string from an array
2. reverse -> reverse an array

```javascript
let letters = ['T', 'E', 'M', 'R', 'U', 'Q'];

console.log(letters.join(''));
console.log(letters.join('&'));
console.log(letters.join('.'));
console.log(letters.reverse().join('.'));
console.log(letters.reverse().join('-'));
console.log(letters.reverse().join(''));
```
You can always join and reverse array that are from different data types.

```javascript
console.log([12.3, 60, false].join(''));
console.log([12.3, 60, false].join(','));
console.log([12.3, 60, false].join(' # -> '));
```

### Slice and splice
More about 
https://habr.com/ru/articles/476082/