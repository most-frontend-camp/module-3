class UserAdmin {
    name; // public
    #age; // private
    static count = 0; // static
    constructor(name) {
        this.name = name;
    }

    constructor(age) {
        this.#age = age;
    }

    constructor(name, age) {
        this.name = name;
        this.#age = age;
        UserAdmin.count++;
    }
}