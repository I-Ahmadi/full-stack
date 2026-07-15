/*
  EventEmitter
  ------------
  Run this file:

    node event-emitter.js

  EventEmitter is Node's built-in event system.

  It lets one part of your app announce that something happened, while other
  parts react to it.
*/

const EventEmitter = require("events");

const shopEvents = new EventEmitter();

shopEvents.on("newSale", (sale) => {
  console.log(`Email receipt to ${sale.customer}`);
});

shopEvents.on("newSale", (sale) => {
  console.log(`Update inventory for product ${sale.productId}`);
});

shopEvents.once("newSale", () => {
  console.log("This listener runs only for the first sale");
});

shopEvents.emit("newSale", {
  customer: "Aisha",
  productId: "course-node",
});

shopEvents.emit("newSale", {
  customer: "Omar",
  productId: "course-react",
});

/*
  Error events
  ------------
  If an EventEmitter emits "error" and nobody listens for it, Node throws.
  Always add an error listener for emitters that may fail.
*/

shopEvents.on("error", (error) => {
  console.error("Handled event error:", error.message);
});

shopEvents.emit("error", new Error("Payment provider is temporarily down"));

/*
  Key methods
  -----------
  emitter.on(eventName, listener)    -> listen many times
  emitter.once(eventName, listener)  -> listen once
  emitter.emit(eventName, data)      -> trigger event
  emitter.off(eventName, listener)   -> remove listener
*/

// Chat App Example
const EventEmitter = require("events");

// Create a chat room
class ChatRoom extends EventEmitter {}
const chat = new ChatRoom();

// Listen for the "message" event
chat.on("message", ({ user, text }) => {
  console.log(`${user}: ${text}`);
});

// Users send messages
chat.emit("message", { user: "Ali", text: "Hi Ismail!" });
chat.emit("message", { user: "Sara", text: "Welcome!" });
