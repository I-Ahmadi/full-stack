// ===================== Getters and Setters =====================

// 1. What are Getters and Setters?
// Getters and setters are special methods used to:

// * **Get (read)** a property value → `get`
// * **Set (update)** a property value → `set`

// They allow you to control how properties are accessed and modified.

// 2. Why Use Them?
// * Add **validation**
// * Hide internal logic (**encapsulation**)
// * Control how data is read or changed

// 3. Key Rules
// * `get` must **return a value**
// * `set` must take **exactly one parameter**
// * Access them like **properties**, not functions

// 4. Getter
const person1 = {
  firstName: "Ismail",
  lastName: "Ahmadi",

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person1.fullName); // Ismail Ahmadi

// Note; We access it like a **property**, not a function
// * No parentheses `()`

// 5. Setter
const person2 = {
  firstName: "",
  lastName: "",

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person2.fullName = "Ismail Ahmadi";

console.log(person2.firstName); // Ismail
console.log(person2.lastName);  // Ahmadi

// 6. Getter + Setter Together
const person = {
  firstName: "Ismail",
  lastName: "Ahmadi",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "Sara Khan";
console.log(person.fullName); // Sara Khan

// 7. In Classes (Modern Way)
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const user = new Person("Ismail", "Ahmadi");
user.fullName = "Sara Khan";
console.log(user.fullName); // Sara Khan

// What is _fullName?
// * It is a convention to use an underscore `_` prefix for private properties.
// * It indicates that the property should not be accessed directly from outside the class.
// * It is not enforced by JavaScript, but it is a widely followed convention to signal that the property is intended for internal use only.

// Example with _fullName
class User {
  constructor(fullName) {
    this._fullName = fullName; // Private property
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    this._fullName = value;
  }
}

const user1 = new User("Ismail Ahmadi");
console.log(user1.fullName); // Ismail Ahmadi

user1.fullName = "Sara Khan";
console.log(user1.fullName); // Sara Khan
