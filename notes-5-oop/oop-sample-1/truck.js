class Car {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    start(){
        console.log(this.name + ' завелась');
    }
    stop(){
        console.log(this.name + ' остановилось');
    }
    accelerate(){
        console.log(this.name + ' разогналась ' + this.speed + ' км/ч');
    }
    printName(){
        return this.name;
    }
}

class Truck extends Car {
    constructor(name, color, speed, capacity) {
        super(name, color, speed);
        this.capacity = capacity;
    }
    load(value){
        if(value <= this.capacity){
           console.log(this.name + ' is loaded for' + value + ' kilograms');
        } else {
            console.log(this.name + ' cannot be loaded for' + value + ' kilograms');
        }
    }
}

// let truck1 = new Truck("MAN", "red", 120); // will show undefined, and cannot be loaded
let truck1 = new Truck("MAN", "red", 120, 14);
console.log(truck1.capacity);
truck1.load(12);
truck1.load(80);