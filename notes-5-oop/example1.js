let o1 = {};
console.log(o1);

let o2 = new Object();   // same thing
console.log(o2);

o1.name = "Whiskey";

o1["name"] = "Whiskey";  // same thing

console.log(o1.name);

o1.sayHi = function() { return "Hi!" };

o1.sayHi();   // Hi!
console.log(o1.sayHi());