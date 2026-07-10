// ===================== Object.create() =====================

// 1. What is `Object.create()`?
// `Object.create()` is a method used to **create a new object with a specific prototype**.

// It lets you manually control the prototype chain.

// When to Use `Object.create()`
// * When you want **full control over prototype**
// * When building **manual inheritance**
// * When avoiding constructors/classes

// 2. Basic Syntax
Object.create(prototypeObject)
// * `prototypeObject` → the object you want to use as the prototype

// Example
const personProto1 = {
  greet() {
    console.log("Hello!");
  }
};

const user1 = Object.create(personProto1);
user1.greet(); // Hello!
console.log(user1.__proto__ === personProto); // true

// Analysis:
// user1 → personProto → Object.prototype → null
// `user1` does not have `greet` directly
// It inherits it from `personProto`

// 3. Adding Properties
const personProto2 = {
  greet() {
    console.log("Hello " + this.name + "!" + "I am " + this.age + " years old.");
  }
};

const user2 = Object.create(personProto2);
user2.name = "Ali";
user2.age = 30;
user2.greet(); // Hello Ali! I am 30 years old.

console.log(user2); // { name: 'Ali', age: 30 }
console.log(user2.__proto__); // { greet: [Function: greet] }
console.log(personProto2); // { greet: [Function: greet] }
