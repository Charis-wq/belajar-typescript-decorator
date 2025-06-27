describe("Readonly", () => {

    interface User {
        id: number,
        name: string,
        email: string
    }

    it("should support", () => {
        const user: Readonly<User> = {
            id: 25,
            name: "joko",
            email: "jsiofs@gmail.com"
        }

        console.log(user);
        //user.id= 30 //Error

    });
});