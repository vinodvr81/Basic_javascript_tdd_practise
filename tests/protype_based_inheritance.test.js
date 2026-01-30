import {Human} from "../src/protype_based_inheritance.js";

test("check how prototype based inheritance works in javascript which is the actual unique type inheritance to js", () => {
    const h1 = new Human("Vukkalam Rangaswamy Vinod", "44");

    
    // 2. Call the inner function and check the result
    expect(h1.sayHello()).toBe("Hello, I am Vukkalam Rangaswamy Vinod and my age is 44");

});