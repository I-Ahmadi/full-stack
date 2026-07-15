/*
  Event Loop
  ----------
  Run this file:

    node event-loop.js

  The **Event Loop** is the core mechanism in **Node.js** that allows it to perform **non-blocking, 
  asynchronous operations** using a **single thread**. 

### Simple Definition

The event loop continuously checks:

1. Is there any task in the callback queue?
2. Is the call stack empty?
3. If yes, move the callback from the queue to the call stack and execute it.

This enables Node.js to handle thousands of concurrent requests without creating a new thread for each request.

### How it Works:
   ┌─────────────┐
   │  Call Stack │
   └──────┬──────┘
          │
          ▼
  Executes synchronous code
          │
          ▼
  Async operations (FS, Timer,
  Network, Database)
          │
          ▼
  Callback Queue
          │
          ▼
    Event Loop
          │
          ▼
Push callback to Call Stack

### Example:

console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 0);

console.log("End");

Output:
- Start
- End
- Timer finished

### Why?

* `console.log("Start")` executes immediately.
* `setTimeout()` registers a timer and moves it to the timer system.
* `console.log("End")` executes.
* The call stack becomes empty.
* The event loop checks the callback queue and executes `"Timer finished"`.

### Event Loop Phases

The Node.js event loop has six main phases:

1. **Timers**
   * Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks**
   * Executes certain system-level callbacks.
3. **Idle/Prepare**
   * Used internally by Node.js.
4. **Poll**
   * Retrieves new I/O events and executes I/O callbacks.
   * Waits here if there are no timers.
5. **Check**
   * Executes callbacks from `setImmediate()`.
6. **Close Callbacks**
   * Executes callbacks like `socket.on('close')`.

### Example: `setTimeout()` vs `setImmediate()`

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

*/

const fs     = require("fs");
const path   = require("path");
const crypto = require("crypto");

console.log("1. Top-level code starts");

setTimeout(() => {
  console.log("4. setTimeout 0ms from top-level");
}, 0);

setImmediate(() => {
  console.log("5. setImmediate from top-level");
});

Promise.resolve().then(() => {
  console.log("3. Promise microtask");
});

process.nextTick(() => {
  console.log("2. process.nextTick");
});

fs.readFile(path.join(__dirname, "event-loop.js"), "utf8", () => {
  console.log("\n6. File read callback runs in the I/O phase");

  setTimeout(() => {
    console.log("8. setTimeout inside I/O");
  }, 0);

  setImmediate(() => {
    console.log("7. setImmediate inside I/O");
  });
});

/*
  Thread pool note
  ----------------
  Some expensive work is handled by libuv's thread pool, including parts of:
  - fs
  - crypto
  - zlib
  - dns.lookup

  The JavaScript event loop is still one main thread, but Node can ask the
  system/thread pool to do slow work in the background.
*/

const started = Date.now();

crypto.pbkdf2("password", "salt", 40000, 32, "sha256", () => {
  console.log(`9. Crypto callback after ${Date.now() - started}ms`);
});

console.log("Top-level code ends\n");

/*
  Simplified priority
  -------------------
  1. Top-level JavaScript runs first.
  2. process.nextTick callbacks run before promise microtasks in Node.
  3. Promise microtasks run.
  4. Event loop phases run timers, I/O, check, close callbacks.

  setImmediate vs setTimeout(0):
  - At top-level, order can vary.
  - Inside I/O, setImmediate usually runs before setTimeout(0).
*/
