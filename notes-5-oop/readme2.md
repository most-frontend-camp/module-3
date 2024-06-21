# OOP 
## OOP Topics
Основные темы
1. Объекты
2. Классы
3. Принципы ООП

### Objects
Как создавать объекты - POJO (Plain Old Javascript Object)

```js
let o1 = {};
let o2 = new Object();
```
### Context `this`
* this - это объект, свойством которого является функция;
* this - дает функциям доступ к своему объекту и его свойствам;
* this - помогает выполнить один и тот же код для нескольких объектов;
* this - можно рассматривать **как кто меня вызвал?**; т.е. то, что находится слева от точки. Например, window.a();
* this - имеет динамическую область, т. е. не важно, где он был написан, важно, где он был вызван.

Practice example
```js
function main() {
    function nativeThis() {
        console.log("native:", this);
    }

    const arrowThis = () => {
        console.log("arrow:", this);
    }

    const harry = {
        name: "Harry",
        logThis() {
            console.log("native:", this);
        },
        returnArrowLog() {
            return () => {
                console.log("arrow:", this);
            }
        }
    };

    harry.arrowLog = harry.returnArrowLog();

    const hermione = {
        name: "Hermione"
    }

    hermione.logThis = harry.logThis
    hermione.arrowLog = harry.returnArrowLog();

    harry.arrowLog(); // harry
    hermione.logThis(); // hermione
    hermione.arrowLog(); // harry
}
main()
```

```js
function main() {
  class EventHandler {
    constructor() {
      this.name = "EventHandler"
    }

    onClick = () => {
      console.log("click", this.name)
    }
  }

  const eventHandler = new EventHandler()

  function callEvent(clickEvent) {
    clickEvent()
  }

  callEvent(eventHandler.onClick)
}
main()

```
### OOP Principles

Принципы ООП
1. Инкапсуляция
2. Наследование
3. Полиморфизм
4. Абстракция


