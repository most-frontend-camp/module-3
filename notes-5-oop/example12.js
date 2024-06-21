const obj = {
    name: 'Alex',
    sing() {
        console.log('a this ', this);
        var anotherFunc = function() {
            console.log('b this ', this);
        }
        anotherFunc();
    }
};

obj.sing();

// a this  {name: "Alex", sing: ƒ}
// b this  Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}