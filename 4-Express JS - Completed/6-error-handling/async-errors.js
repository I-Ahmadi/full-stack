/*
  Async Errors
  ------------
  In Express 5, rejected promises from async handlers are passed to error
  middleware automatically.

  In Express 4, people often used a catchAsync wrapper.
*/

const express = require("express");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createApp() {
  const app = express();

  app.get("/async-fail", async (req, res) => {
    await wait(50);
    throw new Error("Async route failed");
  });

  app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /async-fail"));
}

module.exports = createApp;
