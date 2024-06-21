// Single Responsibility (SRP)

// Класс должен делать одну работу

/*class User {
constructor(name) {
this.name = name;
}

    toJSON() {
        return JSON.stringify(this);
    }
}*/

// Давайте применим SRP


class User {
constructor(name) {
this.name = name;
}
}

class UserSerializer {
static toJSON(user) {
return JSON.stringify(user);
}
}

let admin = new UserSerializer("Backend");


class User {
constructor(username, password) {
this.username = username;
this.password = password;
}

    authenticate(inputPassword) {
        return this.password === inputPassword;
    }
    // save password to db
    save() {
        db.saveUser(this)
    }
}

class UserDataManager{
// save password to db
static save(user) {
const db = getDatabaseConnection();
db.saveUser(this)
}
}
const user = new User('Harry', 'secret');
if(user.authenticate('secret')) {
user.save();
}


OCP

```js
class Rectangle {
    construtor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class AreaCalculator{
    static giveArea(shapes) {
        return shapes.reduce((sum, shape) => sum + shape.area(), 0);
    }
}
```


Liskov Substition Responsible

```js
class Bird {
fly() {
console.log("I can fly");
}
}

class Penguin extends Bird {
fly() {
console.log("I cannot fly");
// throw new Error("Мен уша алмаймын");
}
run() {
console.log("I can run");
}
}
let kovalsky = new Penguin();
let berkut = new Bird();

berkut.fly();
kovalsky.fly();

```

We have interfaces in TS, as we don't have in JS
```js
class Worker {
work() {}
code() {}
}



class Worker {
work() {}
}


class Coder {
code() {}
}
```

Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракции. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
1. Оба типа объектов верхнего и нижнего уровня должны зависеть от абстракции
2. Детали должны зависеть от абстракции - от общего к частному

```
class UsernamePasswordAuth {
    authenticate(username, password) {
        // logic to authenticate using username and password
    }
}

class User {
    login(username, password) {
        const auth = new UsernamePasswordAuth();
        return auth.authenticate(username, password);
    }
}

// DIP
class AbstractAuthMethod(){
    authenticate(credentials) {
        // logic to authenticate using username and password
    }
}

class UsernamePassword extends AbstractAuthMethod(){
    authenticate(username, password) {
        // logic to authenticate using username and password
    }
}

class EmailAuth extends AbstractAuthMethod(){
    authenticate(email, token) {
        // logic to authenticate using username and password
    }
}
```