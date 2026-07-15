/*
  Timers
  ------
  Run this file:

    node timers.js

  Node has several scheduling tools:
  - setTimeout
  - setInterval
  - setImmediate
  - process.nextTick
  - queueMicrotask
*/

console.log("1. Top-level start");

setTimeout(() => {
  console.log("5. setTimeout runs after at least 0ms");
}, 0);

setImmediate(() => {
  console.log("6. setImmediate runs in the check phase");
});

process.nextTick(() => {
  console.log("3. process.nextTick runs before promise microtasks");
});

queueMicrotask(() => {
  console.log("4. queueMicrotask runs as a microtask");
});

let ticks = 0;

const intervalId = setInterval(() => {
  ticks += 1;
  console.log(`interval tick ${ticks}`);

  if (ticks === 3) {
    clearInterval(intervalId);
    console.log("interval stopped");
  }
}, 200);

console.log("2. Top-level end");

/*
  setTimeout(fn, ms)
  Runs once after at least ms milliseconds.

  setInterval(fn, ms)
  Runs repeatedly until clearInterval is called.

  setImmediate(fn)
  Runs after the current poll phase.

  process.nextTick(fn)
  Runs before the event loop continues. Do not abuse it, because too many
  nextTick callbacks can delay I/O.
*/
