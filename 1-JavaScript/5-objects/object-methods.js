// ===================== Objects Methods =====================

// What is an Object Method?
// A method is simply a function stored inside an object.

// When a function becomes a property of an object, we call it a method.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 2003,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // Object method
    // calcAge: function(birthYear) {
    //     return new Date().getFullYear() - birthYear;
    // }

    // calcAge: function() {
    //     return new Date().getFullYear() - this.birthYear;
    // }

    calcAge: function() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, 
            and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}

// console.log(jonas.calcAge(2003));
// console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());
console.log(jonas);

// Challenge
// "Jonas" is a 46-years old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// ---

// Real life multiple methods example
const bankAccount = {
  owner: "Ismail",
  balance: 1000,
  deposit: function (amount) {
    this.balance += amount;
  },
  withdraw: function (amount) {
    this.balance -= amount;
  },
  checkBalance: function () {
    return this.balance;
  }
};

bankAccount.deposit(500);
bankAccount.withdraw(200);

console.log(bankAccount.checkBalance());
