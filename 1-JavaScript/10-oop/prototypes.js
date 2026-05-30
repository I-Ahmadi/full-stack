// ===================== Prototypes =====================

// What is a prototype?
// A prototype is an object that is associated with every function and object in JavaScript. It serves as a blueprint for 
// creating new objects and allows for inheritance of properties and methods.

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

// Prototyping
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

// The prototype of the object created by the constructor function points to the constructor's prototype object.
console.log(toyota.__proto__); // { drive: [Function], info: [Function] }
console.log(honda.__proto__);  // { drive: [Function], info: [Function] }

console.log(toyota.__proto__ === Car.prototype); // true
console.log(honda.__proto__ === Car.prototype);  // true

console.log(Car.prototype.isPrototypeOf(toyota)); // true
console.log(Car.prototype.isPrototypeOf(honda));  // true
console.log(Person.prototype.isPrototypeOf(Person)); // false
