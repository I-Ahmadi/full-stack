/*
  Route Basics
  ------------
  A route is a method + path + handler.

    app.get("/about", handler)

  Express checks routes in the order you register them.
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Home page");
  });

  app.get("/about", (req, res) => {
    res.send("About page");
  });

  app.get("/api/status", (req, res) => {
    res.json({ status: "ok" });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Routing lesson on port 3000"));
}

module.exports = createApp;
