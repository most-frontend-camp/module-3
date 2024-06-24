class User1 {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`Hello, my name is ${this.name}, I like coding!`);
    }
}


function User2(name) {
    this.name = name;

    User2.prototype.sayHi = function () {
        console.log(`Hello, my name is ${this.name}, I like coding!`);
    }
}

const user1 = new User1('Alex');
const user2 = new User2('Alex');
user1.sayHi();
user2.sayHi();

console.log(typeof User1);
console.log(typeof User2);
console.log(User1.prototype);