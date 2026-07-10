// ===================== Static Methods and Static Properties =====================

// 1. What are Static Methods?
// Static methods are functions that belong to the **class itself**, not to instances (objects).

// Static methods are NOT available on instances.
// You call them on the class, not on objects.

// 2. Static vs Instance Methods

// | Feature     | Static Method   | Instance Method  |
// | ----------- | --------------- | ---------------- |
// | Belongs to  | Class           | Object           |
// | Called on   | Class           | Instance         |
// | Uses `this` | Refers to class | Refers to object |

// 3. Basic Example
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5

// 4. Key Idea
// Static method → Class level
// Normal method → Object level

// 5. Wrong Usage (Common Mistake)
// const obj = new MathUtils();
// obj.add(2, 3); // Error

// 6. Real Example
class User {
  constructor(name) {
    this.name = name;
  }

  static sayHello() {
    console.log("Hello from User class");
  }
}

User.sayHello(); // Works
const user = new User("Ismail");
user.sayHello(); // Error

// 7. Why Use Static Methods?
// Use them when the method:
// * Does NOT depend on object data (`this`)
// * Is a utility/helper function
// * Belongs to the class conceptually

// 8. Static Property
class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
}

new User("Ali");
new User("Sara");

console.log(User.count); // 2
