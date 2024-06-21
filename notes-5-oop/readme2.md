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

### Practice example
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
### Example 2 - snippet from React
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

Объекты и классы
- Class кошачьи
- parentClass - `lion`
- childClass - `turanLion` **is-a relationship**
- object - Alex (remember hero from Madagaskar)

Принципы ООП
1. Инкапсуляция
2. Наследование
3. Полиморфизм
4. Абстракция

4 кита
Четыре принципа, поверх которых строятся объектно-ориентированные приложения:
* абстракция — рассмотрение объекта реального мира в контексте конкретной задачи 
* инкапсуляция — сокрытие внутренней реализации
* наследование — передача характеристик одних объектов другим через отношение «является»: кот является животным
* полиморфизм — возможность работать с конкретной структурой данных как с абстрактной