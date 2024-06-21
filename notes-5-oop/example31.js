class Cart {
    constructor() {
        // внутреннее хранилище
        this.items = [];
    }
    find(product) {
        return this.items.find((cartItem) => cartItem.product.id === product.id);
    }
    add(product) {
        const item = this.find(product);
        if (item) {
            item.quantity++;
            return; }
        this.items.push({
            product,
            quantity: 1,
        });
    }
}

class Book {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
const cart = new Cart();
const bookOne = new Book(11, "Приключения Тома Сойера", 300);
const bookTwo = new Book(12, "Краткая история времени", 400);
cart.add(bookOne);
cart.add(bookTwo);

console.log(bookOne);
console.log(bookTwo);
console.log(cart);
// console.log(Book);