// ===================== Inheritance =====================

// What is Inheritance?
// A class can reuse properties and methods from another class.
// So instead of rewriting code, you build on top of existing code.

// 1. Inheritance using Constructor Functions (Prototype way)

// Parent Constructor
function Animal(name, age) {
  this.name = name;
  this.age  = age;
}

// Add method to prototype
Animal.prototype.eat = function () {
  console.log(this.name + " is eating");
};

// Child Constructor
function Dog(name, age, breed) {
  // Call parent constructor to inherit properties
  Animal.call(this, name, age); // inherit properties

  this.breed = breed;
}

// Inherit Prototype Methods
Dog.prototype = Object.create(Animal.prototype);

// Fix Constructor Reference
Dog.prototype.constructor = Dog;

// Child Method
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Usage
const dog1 = new Dog("Tommy", 3, "Labrador");
dog1.eat();  // inherited from Animal
dog1.bark(); // own method


// 2. Inheritance using Classes (Modern Way)

// Parent Class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(this.name + " is eating");
  }
}

// Child Class
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // call parent constructor
    this.breed = breed;
  }

  bark() {
    console.log("Woof!");
  }
}

const dog2 = new Dog("Tommy", 3, "Labrador");
dog2.eat();  // from Animal
dog2.bark(); // from Dog

// Key Differences:
// | Feature     | Constructor Functions    | Classes   |
// | ----------- | ------------------------ | --------- |
// | Syntax      | Complex                  | Simple    |
// | Inheritance | Manual (`Object.create`) | `extends` |
// | Parent call | `call()`                 | `super()` |
// | Readability | Low                      | High      |

// Example of a Bank Account with Inheritance
class Account {
  constructor(owner, balance, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.balance = balance;
    this.movements = [];
    this.local = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

// Create an account
const acc1 = new Account("Jonas", 1000, "EUR", 1111);

acc1.deposit(500);
acc1.withdraw(200);
acc1.requestLoan(1000);

console.log(acc1.movements); // [500, -200]
console.log(acc1.pin); // 1111

// Student Account that inherits from Account
class StudentAccount extends Account {
  constructor(owner, balance, currency, pin, course) {
    super(owner, balance, currency, pin);
    this.course = course;
  }

  approveLoan(val) {
    return val <= 500; // Only approve loans up to 500 for students
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log("Student loan approved");
    }
  }
}

const studentAcc = new StudentAccount("Alice", 500, "USD", 2222, "Computer Science");
studentAcc.requestLoan(300); // Student loan approved
studentAcc.requestLoan(600); // No output, loan not approved
