import {bankAccount} from "../src/encapsulation_ex.js";

test("check how encapsulation works in javascript", () => {
    const myBankAccount = new bankAccount(); 
    myBankAccount.deposit(1000)
    // 2. Call the inner function and check the result
    expect(myBankAccount.getBalance()).toBe(1000);
     myBankAccount.deposit(1000)
    // 3. Call the inner function and check the result
    expect(myBankAccount.getBalance()).toBe(2000);
         myBankAccount.deposit(1000)
    // 4. Call the inner function and check the result
    expect(myBankAccount.getBalance()).toBe(3000);
         myBankAccount.deposit(1000)
    // 5. Call the inner function and check the result
    expect(myBankAccount.getBalance()).toBe(4000);
         myBankAccount.deposit(1000)
    // 6. Call the inner function and check the result
    expect(myBankAccount.getBalance()).toBe(5000);
});