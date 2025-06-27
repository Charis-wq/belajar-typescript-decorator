"use strict";
describe("Partial and Required", () => {
    function getUser(user) {
        console.log(user);
    }
    it("should support partial", () => {
        getUser({
            name: "Abdul charis",
            email: "hjisnsi@gmail.com"
        });
        console.log(getUser);
    });
    it("shoul support required", () => {
        const user = {
            id: 23,
            name: "Abdul Charis",
            email: "jdmoeje@gmail.com"
        };
        console.log(user);
    });
});
