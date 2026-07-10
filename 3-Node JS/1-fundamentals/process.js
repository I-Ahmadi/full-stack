/*
  process Object
  --------------
  Run this file:

    node process.js

  Try it with command-line arguments:

    node process.js Aisha backend

  process is a global object that gives information about the current Node.js
  program and the environment it is running in.
*/

console.log("1. Node.js version:");
console.log(process.version);

console.log("\n2. Current working directory:");
console.log(process.cwd());

/*
  process.argv
  ------------
  argv means "argument values".

  It is an array containing:
  - The Node executable path
  - The file path
  - Any extra values you typed after the file name
*/

console.log("\n3. Raw argv array:");
console.log(process.argv);

const args = process.argv.slice(2);
console.log("\n4. Your custom arguments:");
console.log(args);

const studentName = args[0] || "student";
const topic       = args[1] || "Node.js";
console.log(`\n5. Hello ${studentName}, keep learning ${topic}.`);

/*
  process.env
  -----------
  env contains environment variables.

  Environment variables are useful for values that should not be hard-coded:
  - Database URLs
  - API keys
  - Server ports
  - App modes like development or production

  On PowerShell you can run:
    $env:APP_MODE="development"; node process.js
*/

console.log("\n6. APP_MODE environment variable:");
console.log(process.env.APP_MODE || "APP_MODE is not set");

/*
  stdout and stderr
  -----------------
  stdout is for normal program output.
  stderr is for error output.
*/

process.stdout.write("\n7. stdout says: normal output\n");
process.stderr.write("8. stderr says: error output example\n");

/*
  exitCode
  --------
  Exit code 0 means success.
  Non-zero exit codes mean something went wrong.

  Setting process.exitCode is usually cleaner than calling process.exit(),
  because Node.js can finish pending work before ending.
*/

process.exitCode = 0;
