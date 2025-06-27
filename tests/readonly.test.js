"use strict";
describe("Readonly", () => {
    it("should support", () => {
        const user = {
            id: 25,
            name: "joko",
            email: "jsiofs@gmail.com"
        };
        console.log(user);
        //user.id= 30 //Error
    });
});
