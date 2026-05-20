/*

## What is the Event Loop? (Simple)

The **Event Loop** is how Node.js:
* Runs **many tasks at the same time**
* Using **only one JavaScript thread**
* Without blocking the program

It does this by:
* Sending slow work (I/O, timers, network) to the system
* Running callbacks **when they are ready**

---

## Big Picture

Think of the event loop as a **to-do manager**:
1. JavaScript runs your code
2. Slow tasks are sent away (file read, timers, network)
3. When a task finishes, its callback is put in a queue
4. The event loop picks callbacks and runs them one by one

---

## Event Loop Phases (Simplified)

**main phases**:

### 1️⃣ Timers

* Runs callbacks from:
  * `setTimeout`
  * `setInterval`

### 2️⃣ Poll (Most Important)

* Handles:
  * File system
  * Network requests
* Waits for new I/O
* Executes I/O callbacks

### 3️⃣ Check

* Runs `setImmediate` callbacks

### 4️⃣ Close

* Runs cleanup callbacks (like closed sockets)

---

## Simple Flow

```
timers → poll → check → close → repeat
```

---

## Example: Timer vs Immediate

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
```

⛔ Order is **not guaranteed** outside I/O.

---

### Inside I/O (Guaranteed Order)

const fs = require("fs");

fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
});
```

✅ Output:

```
immediate
timeout
```

Why?
Because `setImmediate` runs **after poll**, and timers run later.

---

## process.nextTick() (Special Case)

`process.nextTick()`:

* Runs **before the event loop continues**
* Runs **before any timers or I/O**
* Can block the event loop if abused

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => console.log("timeout"), 0);
```

Output:

```
nextTick
timeout
```

---

## Simple Rule to Remember

Priority order:

```
process.nextTick
↓
poll (I/O)
↓
setImmediate
↓
setTimeout / setInterval
```

---

## Why This Matters

Understanding the event loop helps you:

* Avoid blocking the server
* Predict execution order
* Write faster APIs
* Debug async issues

---

## One-Sentence Summary

> **The Node.js event loop is a system that lets Node.js run asynchronous code efficiently using one thread by processing tasks in phases.**

If you want, I can also:

* Draw a **mental model**
* Explain it in **one real-world analogy**
* Show **interview-style questions**

Just tell me 👍

*/

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted");
});

console.log("Hello from the top-level code");
