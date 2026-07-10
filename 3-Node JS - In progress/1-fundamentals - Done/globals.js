/*
  Node.js Globals
  ---------------
  Run this file:

    node globals.js

  A "global" is something available without importing it.

  In browser JavaScript, common globals include:
  - window
  - document
  - localStorage

  In Node.js, common globals include:
  - __dirname
  - __filename
  - require
  - module
  - exports
  - process
  - Buffer
  - setTimeout
  - setInterval
  - console
*/

console.log("1. Current folder:");
console.log(__dirname); // D:\Full Stack Development\Full-Stack\3-Node JS\1-basics

console.log("\n2. Current file:");
console.log(__filename); // D:\Full Stack Development\Full-Stack\3-Node JS\1-basics\globals.js

/*
  require()
  ---------
  require loads CommonJS modules.

  Some modules are built into Node.js, like:
  - path
  - os
  - fs
  - http
*/

const path = require("path");
console.log("Path: ", path);

// path.basename: Gets the file or last folder name.
console.log("\n3. File name using the path module:");
console.log(path.basename(__filename)); // global.js

/*
  module and exports
  ------------------
  Every Node.js file is treated like a module.

  You can export values from one file and require them in another file.

  Example:

    // math.js
    module.exports = {
      add(a, b) {
        return a + b;
      },
    };

    // app.js
    const math = require("./math");
    console.log(math.add(2, 3));
*/

console.log("\n4. This file's module id:");

// module.id identifies the module that is currently executing.
console.log(module.id); // global.js

/*
  process
  -------
  process gives information about the running Node.js program.
*/

console.log("\n5. Node.js version:");
console.log(process.version); // v24.16.0

/*
  Buffer
  ------
  Buffer handles binary data.
  You will see it when working with files, streams, images, uploads, and network data.
*/

const messageBuffer = Buffer.from("hello");

console.log("\n6. Buffer example:");
console.log(messageBuffer);
console.log(messageBuffer.toString());
