describe("Record", () => {

    type EmployeeRecord = "manager" | "staff" | "intern";
    
    it("should support", () => {
        const employees: Record<EmployeeRecord, string[]> ={
            manager: ["Rudi", "Siti"],
            staff: ["Budi", "Ani"],
            intern: ["Joko"]
        }

        console.log(employees);

    });
});