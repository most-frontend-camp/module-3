class Human {
    constructor(name) {
        this.name = name;
    }

    say(){
        return `Hello, my name is ${this.name}, I like to move it!`;
    }
}

class Men extends Human {
    constructor(name) {
        super(name);
    }
}

class Coder extends Human {
    constructor(name) {
        super(name);
    }

    say(){
        return `Hello, my name is ${this.name}, I like coding!`;
    }
}

const alex = new Men('Alex');
const leo = new Coder('Leo');
console.log(alex.say());
console.log(leo.say());

// вызываем один и тот же метод, но каждый объект делает его по разному