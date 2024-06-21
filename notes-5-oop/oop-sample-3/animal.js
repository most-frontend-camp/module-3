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
