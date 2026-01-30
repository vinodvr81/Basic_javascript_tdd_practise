export function bankAccount(){
    let balance = 0;
    return {
        deposit(amount){
            balance+=amount;
        },
        getBalance(){
            return balance;
        }
    };
}

let myAccount = new bankAccount();
myAccount.deposit(1000)
console.log(myAccount.getBalance());
myAccount.deposit(1000)
console.log(myAccount.getBalance());
myAccount.deposit(1000)
console.log(myAccount.getBalance());
myAccount.deposit(1000)
console.log(myAccount.getBalance());
myAccount.deposit(1000)
console.log(myAccount.getBalance());
