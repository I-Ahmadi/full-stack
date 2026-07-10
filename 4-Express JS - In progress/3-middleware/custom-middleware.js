/*
  Custom Middleware
  -----------------
  Middleware is a function with:

    (req, res, next)

  It can read or change req/res, end the response, or call next().
*/

const express = require("express");

function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
}

function addRequestId(req, res, next) {
  req.requestId = Date.now().toString(36);
  res.set("X-Request-Id", req.requestId);
  next();
}

function createApp() {
  const app = express();

  app.use(requestLogger);
  app.use(addRequestId);

  app.get("/", (req, res) => {
    res.json({ message: "Custom middleware ran", requestId: req.requestId });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Custom middleware lesson on port 3000"));
}

module.exports = { createApp, requestLogger, addRequestId };
