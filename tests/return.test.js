"use strict";
describe("Return Type", () => {
    class UserClass {
        constructor(name, id) {
            this.name = name;
            this.id = id;
        }
    }
    function createUser(name, id) {
        return new UserClass(name, id);
    }
    it("should support ", () => {
        const user = createUser("Charis", 2232);
        console.log(user);
    });
});
