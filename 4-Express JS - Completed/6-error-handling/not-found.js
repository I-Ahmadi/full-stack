/*
  Not Found Handler
  -----------------
  A 404 handler should come after all valid routes.
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Home route exists");
  });

  app.use((req, res) => {
    res.status(404).json({
      error: "Route not found",
      path: req.originalUrl,
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /missing"));
}

module.exports = createApp;
