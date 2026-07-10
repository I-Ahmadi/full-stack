/*
  Event Loop
  ----------
  Run this file:

    node event-loop.js

  The event loop lets Node.js handle async work without creating one JavaScript
  thread per request.
*/

const fs = require("fs");
const path = require("path");
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
