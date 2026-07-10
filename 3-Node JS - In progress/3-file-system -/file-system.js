/*
  Node.js File System
  -------------------
  Run this file:

    node file-system.js

  The fs module lets Node.js work with files and folders.

  You can:
  - Read files
  - Write files
  - Append to files
  - Delete files
  - Create folders
  - Inspect file information

  This file teaches four styles:
  1. Synchronous fs methods
  2. Callback-based async fs methods
  3. Promise-based fs methods
  4. async/await with fs/promises
*/

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

const txtPath = (fileName) => path.join(__dirname, "txt", fileName);

console.log("File system lesson starting...\n");

/*
  1. Synchronous file methods
  ---------------------------
  Synchronous means blocking.

  Node.js waits for the operation to finish before moving to the next line.

  Sync methods are simple, but avoid them in busy servers because they block
  the event loop while the disk operation runs.
*/

function syncExample() {
  console.log("1. Synchronous example");

  try {
    const input = fs.readFileSync(txtPath("input.txt"), "utf8");
    const output = `SYNC OUTPUT\n${input}\nCreated with fs.readFileSync and fs.writeFileSync.\n`;

    fs.writeFileSync(txtPath("output.txt"), output);
    fs.appendFileSync(txtPath("output.txt"), "Appended with fs.appendFileSync.\n");

    const stats = fs.statSync(txtPath("output.txt"));

    console.log("Read input.txt");
    console.log("Wrote output.txt");
    console.log("output.txt size:", stats.size, "bytes\n");
  } catch (error) {
    console.error("Sync example failed:", error.message);
  }
}

/*
  2. Callback-based async file methods
  ------------------------------------
  Async means non-blocking.

  Node.js starts the operation, keeps going, and later runs your callback.

  The callback receives:
  - error as the first argument
  - data/result as the second argument when there is one
*/

function callbackExample(done) {
  console.log("2. Callback async example");

  fs.readFile(txtPath("read-this.txt"), "utf8", (readError, firstText) => {
    if (readError) return done(readError);

    fs.readFile(txtPath("append.txt"), "utf8", (appendError, appendText) => {
      if (appendError) return done(appendError);

      const output = `CALLBACK OUTPUT\n${firstText}\n${appendText}\n`;

      fs.writeFile(txtPath("callback-output.txt"), output, (writeError) => {
        if (writeError) return done(writeError);

        console.log("Wrote callback-output.txt\n");
        done();
      });
    });
  });
}

/*
  Callback hell
  -------------
  The callback example above works, but nested callbacks can become difficult
  to read when a workflow has many steps.

  Promises and async/await solve this by letting code read top-to-bottom.
*/

/*
  3. Promise-based file methods
  -----------------------------
  fs/promises gives promise versions of file methods.

  A promise represents a value that will be ready later.
*/

function promiseExample() {
  console.log("3. Promise example");

  return fsPromises
    .readFile(txtPath("start.txt"), "utf8")
    .then((nextFileName) => fsPromises.readFile(txtPath(`${nextFileName.trim()}.txt`), "utf8"))
    .then((mainText) => {
      const output = `PROMISE OUTPUT\n${mainText}\nCreated with fs/promises and .then().\n`;
      return fsPromises.writeFile(txtPath("promise-output.txt"), output);
    })
    .then(() => {
      console.log("Wrote promise-output.txt\n");
    });
}

/*
  4. async/await
  --------------
  async/await is the most common modern style.

  It still uses promises, but the code looks more like normal step-by-step
  code. Use try/catch for errors.
*/

async function asyncAwaitExample() {
  console.log("4. async/await example");

  const nextFileName = await fsPromises.readFile(txtPath("start.txt"), "utf8");
  const mainText = await fsPromises.readFile(txtPath(`${nextFileName.trim()}.txt`), "utf8");
  const appendText = await fsPromises.readFile(txtPath("append.txt"), "utf8");

  const output = `ASYNC AWAIT OUTPUT\n${mainText}\n${appendText}\n`;

  await fsPromises.writeFile(txtPath("final.txt"), output);

  console.log("Wrote final.txt\n");
}

/*
  5. Create and delete demo files
  -------------------------------
  This creates a temporary file, proves it exists, then deletes it.
*/

async function createAndDeleteExample() {
  console.log("5. Create and delete example");

  const tempFile = txtPath("delete-me.txt");

  await fsPromises.writeFile(tempFile, "Temporary file for delete demo.\n");
  console.log("Created delete-me.txt");

  await fsPromises.unlink(tempFile);
  console.log("Deleted delete-me.txt\n");
}

/*
  Run the lesson in order.

  callbackExample uses a callback, so we wrap it in a Promise to make the whole
  lesson run in a predictable sequence.
*/

function runCallbackExample() {
  return new Promise((resolve, reject) => {
    callbackExample((error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

async function main() {
  try {
    syncExample();
    await runCallbackExample();
    await promiseExample();
    await asyncAwaitExample();
    await createAndDeleteExample();

    console.log("Done. Check the txt folder to see the generated files.");
  } catch (error) {
    console.error("File system lesson failed:", error.message);
    process.exitCode = 1;
  }
}

main();

/*
  Key takeaways
  -------------
  - Use fs to work with the file system.
  - Sync methods block the event loop.
  - Async methods are better for servers and APIs.
  - fs/promises is the modern promise-based API.
  - async/await is usually the cleanest style.
  - Use path.join and __dirname for reliable file paths.
*/
