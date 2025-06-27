"use strict";
describe("Pick and Omit", () => {
    it("should support pick", () => {
        const product = {
            name: "Laptop",
            price: 1500
        };
        console.log(product);
    });
    it("should support omit", () => {
        const user = {
            name: " handphone",
            price: 1000
        };
        console.log(user);
    });
});
