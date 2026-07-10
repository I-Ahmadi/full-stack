/*
  Middleware Order
  ----------------
  Express runs middleware and routes in registration order.

  If middleware does not call next() or send a response, the request hangs.
*/

const express = require("express");

function createApp() {
  const app = express();

  app.use((req, res, next) => {
    req.steps = ["first middleware"];
    next();
  });

  app.use((req, res, next) => {
    req.steps.push("second middleware");
    next();
  });

  app.get("/order", (req, res) => {
    req.steps.push("route handler");
    res.json({ steps: req.steps });
  });

  app.use((req, res) => {
    res.status(404).json({ error: "Not found", steps: req.steps || [] });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /order"));
}

module.exports = createApp;
