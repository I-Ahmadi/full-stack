/*
  worker_threads
  --------------
  Run this file:

    node worker-threads.js

  Worker threads run JavaScript on another thread.
  Use them for CPU-heavy work, not normal file or network I/O.
*/

const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (!isMainThread) {
  const result = fibonacci(workerData.number);
  parentPort.postMessage({
    number: workerData.number,
    result,
  });
} else {
  console.log("Main thread is free to keep working.");

  const worker = new Worker(__filename, {
    workerData: {
      number: 35,
    },
  });

  worker.on("message", (message) => {
    console.log(`fibonacci(${message.number}) = ${message.result}`);
  });

  worker.on("error", (error) => {
    console.error("Worker failed:", error.message);
  });

  worker.on("exit", (code) => {
    console.log("Worker exited with code:", code);
  });

  console.log("Worker started. Main thread reached the end of the file.");
}
