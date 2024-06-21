class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }

    set width(value){
        if(value > 0){
            this.width = this.value;
        } else {
            console.log('width should be greater than 0');
        }
    }
    set height(value){
        if(value > 0){
            this.height = this.value;
        } else {
            console.log('width should be greater than 0');
        }
    }
}

let rect1 = new Rectangle(10, 20);
console.log(rect1.area);
rect1.width = 5;
console.log(rect1.area);
