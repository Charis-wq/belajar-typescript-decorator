describe("InstanceType", () => {
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    type PersonType = InstanceType<typeof Person>;

    function getDetails(name: string, age: number): PersonType{
        return new Person(name, age);
    }

    it("should support", () => {

        const person: PersonType = getDetails("Charis", 30);
        console.log(person); 

    })
})