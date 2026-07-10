/*
  path and os Modules
  -------------------
  Run this file:

    node path-os.js

  Node.js has built-in modules. You do not install them with npm.

  path: work with file and folder paths safely
  os: get information about the operating system
*/

const path = require("path");
const os   = require("os");

/*
  Why use path instead of writing strings by hand?

  Windows paths use backslashes:
    C:\Users\Name\file.txt

  macOS/Linux paths use forward slashes:
    /Users/name/file.txt

  The path module helps your code work across operating systems.
*/

const folder   = "notes";
const fileName = "lesson.txt";
const fullPath = path.join(__dirname, folder, fileName);

console.log("1. Safe joined path:");
console.log(fullPath);

console.log("\n2. Path parts:");
console.log("Directory:", path.dirname(fullPath));
console.log("Base name:", path.basename(fullPath));
console.log("Extension:", path.extname(fullPath));

console.log("\n3. Absolute path?");
console.log(path.isAbsolute(fullPath));

console.log("\n4. Parsed path object:");
console.log(path.parse(fullPath));

/*
  os module
  ---------
  The os module can tell you about the computer running the code.
*/

console.log("\n5. Operating system information:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU cores:", os.cpus().length);
console.log("Home folder:", os.homedir());
console.log("Temp folder:", os.tmpdir());

const totalMemoryInGB = os.totalmem() / 1024 / 1024 / 1024;
const freeMemoryInGB = os.freemem() / 1024 / 1024 / 1024;

console.log("\n6. Memory:");
console.log("Total GB:", totalMemoryInGB.toFixed(2));
console.log("Free GB:", freeMemoryInGB.toFixed(2));
