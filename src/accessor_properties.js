export const user = {
    firstName: "Vinod",
    middleName: "Rangaswamy",
    sirName: "Vukkalam",
    get fullName(){
        return `${this.sirName} ${this.middleName} ${this.firstName}`
    }
};

console.log(user.fullName);

