/*
  Event-Driven Architecture
  -------------------------
  Run this file:

    node event-driven-architecture.js

  Event-driven architecture means:
  - One part of the app emits an event.
  - Other parts listen and react.
  - The emitter does not need to know every listener.

  This keeps code more decoupled.
*/

const EventEmitter = require("events");

class OrderService extends EventEmitter {
  createOrder(order) {
    console.log(`Order ${order.id} created`);

    this.emit("orderCreated", order);

    return order;
  }
}

const orders = new OrderService();

orders.on("orderCreated", (order) => {
  console.log(`Send confirmation email to ${order.email}`);
});

orders.on("orderCreated", (order) => {
  console.log(`Reserve inventory for ${order.item}`);
});

orders.on("orderCreated", (order) => {
  console.log(`Record analytics event for order ${order.id}`);
});

orders.createOrder({
  id: 101,
  email: "student@example.com",
  item: "Node.js course",
});

/*
  Why this helps
  --------------
  Without events, createOrder might directly call:
  - sendEmail()
  - reserveInventory()
  - recordAnalytics()

  That creates tight coupling.

  With events, createOrder only says "orderCreated happened".
  Listeners decide what to do.
*/
