describe("makeDogObject", function() {
    let dog;
    beforeEach(function() {
        dog = makeDogObject();
    });
    it("should should have a name", function() {
        expect(dog.name).toBe("Fido");
    });
    it("should should have an age", function() {
        expect(dog.age).toBe(6);
    });
    it("should should have a color", function() {
        expect(dog.color).toBe("white");
    });
    it("should speak", function() {
        expect(dog.speak()).toBe("woof");
    });
});