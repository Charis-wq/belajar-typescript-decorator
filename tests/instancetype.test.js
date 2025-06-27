"use strict";
describe("InstanceType", () => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    function getDetails(name, age) {
        return new Person(name, age);
    }
    it("should support", () => {
        const person = getDetails("Charis", 30);
        console.log(person);
    });
});
