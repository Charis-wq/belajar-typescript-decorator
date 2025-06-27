describe("Return Type", () => {
    class UserClass {
        name: string;
        id: number;

        constructor(name: string, id: number) {
            this.name = name;
            this.id = id;
        }
    }

    function createUser(name: string, id: number) {
        return new UserClass(name, id);
    }
    type User = ReturnType<typeof createUser>;
    it("should support ", () => {

        const user: User = createUser("Charis", 2232);
        console.log(user);

    });
});