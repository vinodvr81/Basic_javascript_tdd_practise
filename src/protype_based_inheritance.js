export function Human(name, age){
    this.name = name;
    this.age = age;
}

Human.prototype.sayHello = function(){
    return `Hello, I am ${this.name} and my age is ${this.age}`;
};

const h1 = new Human("Vukkalam Rangaswamy Vinod", "44");
console.log(h1.sayHello());