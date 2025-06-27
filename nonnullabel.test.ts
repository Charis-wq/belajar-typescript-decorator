describe("NonNullable", () => {
    
    type Married = string | null | undefined;
    type NonMarried = NonNullable<Married>;

    it("should support", () => {

        const person: Married = "Adelia";
        const spouse: NonMarried = " Budi";

        
        console.log(person);
        console.log(spouse);
    })
})