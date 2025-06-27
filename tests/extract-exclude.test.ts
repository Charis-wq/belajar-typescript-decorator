describe("Extract", () => {

    type Staff = string | number;
    type Manager = Extract<Staff, string>;
    type Intern = Exclude<Staff, number>;

    it("should support extract", () => {
        const staff: Staff = 2122342;

        const manager: Manager = "Rudi";
        
        console.log(staff);
        console.log(manager);

    });

    it("should support exclude", () => {

        const intern: Intern = "Joko";
        console.log(intern);

    })

}); 