# Testing 
You can test manually or using Jest:
Install Jest using your favorite package manager:

```bash
npm install --save-dev jest
```

```javascript
function sum(a, b) {
return a + b;
}
module.exports = sum;
```

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your package.json:
```json
{    
    "scripts": {
    "test": "jest"
    }
}
```

Finally, run 
```
npm test 
```
and Jest will print this message:
```
/opt/homebrew/bin/npm test

> test
> jest

PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.134 s, estimated 1 s
Ran all test suites.

Process finished with exit code 0
```

### Problems
Write down more test cases for those problems:
1. Task 1 - twoSum Leetcode problem
2. Task 2 - check whether the number is even or not
3. Task 3 - proficient addition of two arguments 
4. Task 4 - find first vowel in a string

### Homework
1. create own example with arrays
2. create own example with exceptions

### Extra homework
1. create own example with promise
2. create own example with async/await
3. create own example with callback