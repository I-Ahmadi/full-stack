/*

## **Modules:

## **What are JavaScript Modules?**

A **module** is basically a **self-contained piece of code** that can:

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

module.exports.add = (a, b) => a + b;
module.exports.subtract = (a, b) => a - b;

**app.js**

const { add, subtract } = require('./util');

console.log(add(5, 5));       // 10
console.log(subtract(10, 5)); // 5

**Notes:**
* Can `require()` modules **anywhere in code** (runtime).
* Loads **synchronously**, which can block if the module is large or does heavy tasks.

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

### How to use ESM in Node.js:

1. Rename files to `.mjs` **or**
2. Add `"type": "module"` in `package.json`:

*/

// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const Calculator = require("./test-module-1");
const calc1 = new Calculator();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module-2");
const { add, multiply } = require("./test-module-2");
console.log(multiply(2, 5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
