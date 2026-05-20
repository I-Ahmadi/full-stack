// ===================== Classes =====================

// A class is a blueprint to create multiple objects.
// Instead of repeating the same object structure, you define it once.

// Analogy: If an object is a car, then a class is the car factory blueprint.

// Class exprssion
const CarClass = class {};

// Class declaration
class Car {
  constructor(brand, color, year) {
    this.brand = brand;
    this.color = color;
    this.year = year;
  }

  // Methods will be added to the prototype of the class, so all instances can use them without duplication.
  info() {
    console.log(`This is a ${this.color} ${this.brand} from ${this.year}`);
  }

  // Methods will be added to the prototype of the class, so all instances can use them without duplication.
  drive() {
    this.speed = 60;
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }

  // Same as here
  // stop() {
  //   this.speed = 0;
  //   console.log(`${this.brand} has stopped.`);
  // }
}

// Objects of the car class
const car1 = new Car("BMW", "red", 2020);
const car2 = new Car("Toyota", "blue", 2021);

console.log(Car.__proto__); // The prototype of the Car class
console.log(Car.__proto__ === Car.prototype); // true

car1.info(); // This is a red BMW from 2020
car1.drive(); // BMW is driving at 60 km/h

console.log(car2.brand, car2.color, car1.year);

// The constructor method is a special method for creating and initializing an object created with 
// a class. It is called automatically when a new instance of the class is created.

// Key Idea:
// Class  = blueprint
// Object = instance of class

// Adding class method manually to the prototype
Car.prototype.stop = function() {
  this.speed = 0;
  console.log(`${this.brand} has stopped.`);
}

console.log(Car); // [class Car] { ... }
console.log(Car.prototype); // { info: [Function: info], drive: [Function: drive], stop: [Function] }
console.log(car1.stop()); // BMW has stopped.
