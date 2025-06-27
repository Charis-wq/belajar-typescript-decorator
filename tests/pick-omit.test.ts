describe("Pick and Omit", () => {
     interface Product {
        name: string;
        price: number;
        description: string;

    }
    
    type productView = Pick<Product, "name" | "price">;

  it("should support pick", () => {
    const product : productView = {
        name: "Laptop",
        price: 1500
    }

    console.log(product);

  });
  it("should support omit", () => {
    type userInfo = Omit<Product, "description">;

    const user: userInfo = {
      name: " handphone",
      price: 1000
    }

    console.log(user);
  });
});