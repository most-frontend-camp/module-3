// class expression if you have Car2 - named class, if not - we will have anonymous class
```js
let Car = class Car2{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
```

### Наследование 
Разобрали проект с `Truck` и `Car` с папки `oop-sample-1`.

### Инкапсуляция
Геттеры и сеттеры — это специальные методы класса, которые позволяют получать и устанавливать значения свойств объекта. Они используются для контроля доступа к свойствам объекта, проверки входных данных и выполнения дополнительной логики.


### Context this

Иногда значение this - может измениться может поменяться

Раньше решали через эти методы
1. call, apply -> вызывает функции с контекстом и аргумент
2. bind -> привязаться к методу, вызывать новую функцию

Сейчас
1. call, apply -> rest spread
2. bind -> arrow function

Эти способы помогают контролировать значение this.

function - вызова
arrow function - в момент создания 

### Полиморфизм

Собака
Птица
Улитка

Общий метод - делают передвижение по разному

Способность реализовать один метод название, но они делают по разному

```js
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
```

Вызываем один и тот же метод, но каждый объект делает его по-разному.

### другой пример

```js
class Dog {
    bark() {return "woof!"}
    speak() {return "woof!"}
}

class Cat {
    meow() {return "meow!"}
    speak() {return "meow!"}
}

class Snake {
    hiss() {return "Sssss....!"}
    speak() {return "Sssss....!"}
}

for (const pet of pets) {
    /*   if(pet instanceof Dog) pet.bark();
    if(pet instanceof Cat) pet.meow();
    if(pet instanceof Snake) pet.hiss();*/
    pet.speak();
}
```

