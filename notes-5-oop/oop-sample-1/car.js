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

}

let truck1 = new Truck("MAN", "red", 120);
console.log(truck1.name);
console.log(truck1.color);
truck1.accelerate();

let car1 = new Car("Audi", "black", 200);
let car2 = new Car("BMW", "white", 180);

console.log(car1.name);
console.log(car1.color);
console.log(car1.speed);
car2.accelerate();
car1.stop();
console.log(car1.printName());

