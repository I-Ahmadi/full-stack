/*
  Async Overview
  --------------
  Run this file:

    node index.js

  This file summarizes the folder. Run the focused files next:

    node callbacks-promises.js
    node async-await.js
*/

console.log("Asynchronous JavaScript in Node.js");
console.log("----------------------------------");
console.log("Synchronous code runs line by line.");
console.log("Asynchronous code finishes later without blocking the event loop.");

setTimeout(() => {
  console.log("3. Timer callback finished later");
}, 100);

Promise.resolve().then(() => {
  console.log("2. Promise microtask finished soon");
});

console.log("1. Top-level code finished first");

/*
  Use callbacks when an API requires them.
  Use promises when composing async steps.
  Use async/await for readable promise-based workflows.
*/
