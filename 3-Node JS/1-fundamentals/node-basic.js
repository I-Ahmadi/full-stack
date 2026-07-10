/*
  Node.js Basics
  --------------
  Run this file:

    node node-basic.js

  Node.js is a JavaScript runtime.
  That means it lets JavaScript run outside the browser, usually on your
  computer or on a server.

  Browser JavaScript is good for:
  - Updating HTML and CSS
  - Handling button clicks
  - Working with browser APIs like document, window, localStorage

  Node.js JavaScript is good for:
  - Creating servers and APIs
  - Reading and writing files
  - Working with databases
  - Running command-line tools
  - Automating tasks
*/

console.log("1. Hello from Node.js");

/*
  Node.js uses Chrome's V8 JavaScript engine.

  V8 understands and runs JavaScript. Node.js adds extra features around it,
  like file system access, networking, and operating system tools.
*/

const name = "Node learner";
const year = 2026;

console.log("2. Variables still work like normal JavaScript:");
console.log(`Hello, ${name}. You are learning Node.js in ${year}.`);

/*
  Synchronous vs asynchronous
  ---------------------------
  Synchronous code runs line by line. Each line waits for the previous one.

  Asynchronous code starts a task and lets Node.js continue doing other work.
  When the task is ready, Node.js runs the callback or resolves the promise.
*/

console.log("3. Before setTimeout");

setTimeout(() => {
  console.log("5. This runs later because setTimeout is asynchronous");
}, 1000);

console.log("4. After setTimeout");

/*
  Why asynchronous code matters:

  Servers often wait for slow tasks:
  - Reading files
  - Calling APIs
  - Querying databases
  - Uploading images

  If Node.js blocked every time it waited, one slow task could freeze the app.
  Async code lets Node.js keep handling other work.
*/

/*
  npm
  ---
  npm means Node Package Manager.

  It helps you install packages made by other developers.

  Examples:

    npm init -y
    npm install express

  Common packages:
  - express: build web servers and APIs
  - dotenv: load environment variables from a .env file
  - mongoose: work with MongoDB
  - cors: allow frontend apps to call your backend
*/

/*
  Quick mental model:

  JavaScript = the language
  Node.js    = a runtime that runs JavaScript outside the browser
  npm        = package manager for installing reusable code
*/
