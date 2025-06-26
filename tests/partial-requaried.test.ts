describe("Partial and Required", () => {
    interface User {
        id: number;
        name: string;
        email: string
    }

     function getUser(user: Partial<User>){

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
        const user: Required<User> = {
            id: 23,
            name: "Abdul Charis",
            email: "jdmoeje@gmail.com"
        }
        console.log(user);
 