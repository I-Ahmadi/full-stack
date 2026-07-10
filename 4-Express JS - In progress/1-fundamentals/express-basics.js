/*
  Express Basics
  --------------
  Run after installing dependencies:

    node 1-fundamentals/express-basics.js

  Express apps are made of:
  - an app object
  - routes
  - middleware
  - a listening server
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello from Express");
  });

  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      framework: "express",
    });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Express basics running on http://localhost:${port}`);
  });
}

module.exports = createApp;
