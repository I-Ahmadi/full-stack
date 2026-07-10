/*

## **Modules:

## **What are JavaScript Modules?**
**module** is basically a **self-contained piece of code** that can:

* Define functions, variables, or classes.
* Export what should be accessible to other parts of the code.
* Keep private what shouldn’t be accessed outside the module.

**Why use modules?**
* Prevent **global scope pollution** (no name conflicts).
* Allow **code reuse** across files/projects.
* Make code **more organized and maintainable**.

---

## **CommonJS Modules (CJS)**
* Node.js **default module system**.
* Synchronous loading using `require()` and `module.exports`.

### Example:

**util.js**
module.exports.add      = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

**app.js**
const { add, subtract } = require('./util');

console.log(add(5, 5));       // 10
console.log(subtract(10, 5)); // 5

---

## **ES Modules (ESM)**
* Modern, standardized module system.
* Uses `import` / `export`.
* Supports asynchronous loading.
* Works in **both Node.js and browsers**.

### Example:

**util.mjs**

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

**app.mjs**

import { add, subtract } from './util.mjs';

console.log(add(5, 5));       // 10
console.log(subtract(10, 5)); // 5

*/

// module.exports - classes
const Calculator = require("./test-module-1");
const calc1      = new Calculator();
console.log(calc1.add(2, 5));

// module.exports - functions
// const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(2, 5));

// --------------------------------------

// In Node.js CommonJS, there are two main ways to export values:

// ### 1. Export with a name
// Assign a value to a property of `module.exports`:

// module.exports.add = function (a, b) {
//   return a + b;
// };

// Import:
// const calculator = require("./calculator");

// calculator.add(2, 3);
// console.log(calculator.name);

// ---

// ### 2. Export without a name (direct export)
// Replace `module.exports` completely with a value:

// module.exports = function (a, b) {
//   return a + b;
// };

// or:

// module.exports = class Calculator {
//   add(a, b) {
//     return a + b;
//   }
// };

// Import:
// const Calculator = require("./calculator");
// const calc       = new Calculator();
