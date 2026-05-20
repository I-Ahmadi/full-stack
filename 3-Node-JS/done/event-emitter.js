/*

## Node.js EventEmitter (Summary with Examples)

Node.js uses an **event-driven model**, similar to how browsers react to user actions like clicks or key presses.
On the backend, this is handled using the built-in **`events` module**.

---
## 1️⃣ Creating an EventEmitter

const EventEmitter = require("node:events");
const eventEmitter = new EventEmitter();
```

This creates an object that can **emit events** and **listen to events**.

---
## 2️⃣ Listening to an Event (`on`)

eventEmitter.on("start", () => {
  console.log("started");
});
```

This registers a listener that runs when the `"start"` event is triggered.

---
## 3️⃣ Emitting an Event (`emit`)

eventEmitter.emit("start");

---
## 4️⃣ Passing Data to Events

### Single Argument:
eventEmitter.on("start", (number) => {
  console.log(`started ${number}`);
});

eventEmitter.emit("start", 23);
```

---
### Multiple Arguments:
eventEmitter.on("start", (from, to) => {
  console.log(`started from ${from} to ${to}`);
});

eventEmitter.emit("start", 1, 100);

---
## 5️⃣ Key Idea

* `emit()` → triggers an event
* `on()` → reacts to an event

* Data can be passed through events
* Multiple listeners can respond to the same event

---
### One-Line Takeaway
**EventEmitter allows backend code to communicate through events, just like the browser handles user interactions.**

*/

const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", stock => {
  console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

//////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});

// -------------------------EventEmitter-------------------------

const express = require('express');
const EventMitter = require('events');

const app = express();
app.use(express.json());

/* --------------------
  Event Emitter
-------------------- */

const userEvents = new EventEmitter();

/* --------------------
  Event Listeners
-------------------- */

userEvents.on('userCreated', (user) => {
  console.log(`📧 Sending welcome email to ${user.email}`);
});

userEvents.on('userCreated', (user) => {
  console.log(`📝 Logging user creation: ${user.id}`);
});

userEvents.on('userCreated', (user) => {
  console.log("📊 Updating user metrics");
});

/* --------------------
  API Endpoint
-------------------- */

app.post('/users', (req, res) => {
  const user = {
    id: Date.now(),
    email: req.body.email
  };

  // Emit event (non-blocking)
  userEvents.emit('userCreated', user);

  // Respond immediately
  res.status(201).json({
    message: "User created successfully!",
    user
  });
});

/* --------------------
  Start Server
-------------------- */

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});

