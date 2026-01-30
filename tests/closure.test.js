import {counter} from "../src/closure_ex.js";

test("check how closure works", () => {
    const myCounter = counter(); 
    
    // 2. Call the inner function and check the result
    expect(myCounter()).toBe(1);
    expect(myCounter()).toBe(2);
});