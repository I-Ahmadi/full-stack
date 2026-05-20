// 1:
// What is Node.js?
// Node.js = JavaScript runtime environment

/*

This means:
- It allows JavaScript to run on your computer or server
- Not just inside the browser
- Built on Google Chrome’s V8 engine
- Very fast

*/

/*

2. Why was Node.js created?

To:
- Use one language (JavaScript) for:
  - Frontend (browser)
  - Backend (server)
  - Build fast and scalable servers

*/

/*

3. What can Node.js do?

With Node.js, you can:
✅ Create web servers
✅ Build APIs
✅ Connect to databases (MongoDB, MySQL, PostgreSQL)
✅ Read/write files
✅ Handle thousands of users at the same time

Example:
console.log("Hello from Node.js");

*/

/*

4. How Node.js works

Node.js uses:
🔹 Single-threaded
- One main thread
- Very lightweight

🔹 Non-blocking (Asynchronous)
- It does not wait for tasks like:
- Database queries
- File reading
 
Uses callbacks, promises, async/await

Example:

setTimeout(() => {
    console.log("Done"); 
}, 2000);

console.log("Running...");

// Output:
Running...
Done

*/

/*

5. What is npm?
npm = Node Package Manager

- Comes with Node.js
- Used to install libraries

Example:
npm install express

Popular packages:
- express (web framework)
- mongoose (MongoDB)
- cors
- dotenv

*/

// --------------------------------------

/*

1. Blocking (Waiting)
- You go to a shop:
- You order tea
- You stand there and wait
- You do nothing else until tea is ready
👉 Everything stops until the task finishes.

readFile("data.txt");   // takes 3 seconds
console.log("Done");

2. Non-Blocking (No waiting)
- You go to a shop:
- You order tea
- You sit, check phone, talk to friends
- When tea is ready, the waiter calls you
👉 You keep doing other work.

readFile("data.txt", () => {
    console.log("File read done")
});

*/
