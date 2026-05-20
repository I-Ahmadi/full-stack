// ===================== Constructor Function =====================

// - Constructor Function and the `new` Keyword
// A constructor function is a special function used to create objects. It acts like a blueprint.
// The `new` keyword is used to call a constructor function and create a new object.

function Person(name, age) {
  console.log("New object created:", this); // This will log the new object being created ( New Person {} )

  this.name = name;
  this.age  = age;
}

const user1 = new Person("Ali", 2003);
const user2 = new Person("Sara", 1999);

console.log(user1, user2); // Person { name: 'Ali', age: 2003 } Person { name: 'Sara', age: 1999 }

// - What happens when you use `new`?

// When you run:
// const user1 = new Person("Ali", 20);

// JavaScript does these steps automatically:

// 1. Creates an empty object:
// New {} is created

// 2. Sets `this` to that object:
// this.name = "Ali";
// this.age = 20;

// 3. Links the object to the prototype:
// user1.__proto__ = Person.prototype;

// 4. Returns the object:
// return user1;

const Car = function(make, model, year) {
    this.make  = make;
    this.model = model;
    this.year  = year;

    /* Never do this */
    // Methods must be assigned to `this`
    // this.drive = function() {
    //     console.log(`${this.make} ${this.model} is driving.`);
    // }

    // Methods must be assigned to `this`
    // this.info = function() {
    //     console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    // }

    // Instead, methods should be added to the prototype for better memory efficiency
}

const toyota = new Car("Toyota", "Camry", 2020);
const honda = new Car("Honda", "Civic", 2019);

toyota.drive(); // Toyota Camry is driving.
toyota.info();  // Car: Toyota Camry, Year: 2020

console.log(toyota); // Car { make: 'Toyota', model: 'Camry', year: 2020 }
console.log(honda);  // Car { make: 'Honda', model: 'Civic', year: 2019 }

console.log(toyota instanceof Car); // true
console.log(honda instanceof Car);  // true

console.log(toyota instanceof Person); // false
console.log(honda instanceof Person);  // false

// Prototype methods:

Car.prototype.drive = function() {
    console.log(`${this.make} ${this.model} is driving.`);
}

Car.prototype.info = function() {
    console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
}

console.log(Car.prototype); // { drive: [Function], info: [Function] }

toyota.drive(); // Toyota Camry is driving.
toyota.info();  // Car: Toyota Camry, Year: 2020

honda.drive(); // Honda Civic is driving.
honda.info();  // Car: Honda Civic, Year: 2019
