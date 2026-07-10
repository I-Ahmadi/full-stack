/*
  Status Codes
  ------------
  2xx success
  3xx redirects
  4xx client errors
  5xx server errors
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/ok", (req, res) => res.status(200).json({ message: "OK" }));
  app.post("/created", (req, res) => res.status(201).json({ message: "Created" }));
  app.delete("/empty", (req, res) => res.status(204).end());
  app.get("/bad-request", (req, res) => res.status(400).json({ error: "Bad request" }));
  app.get("/server-error", (req, res) => res.status(500).json({ error: "Server error" }));

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Status code lesson on port 3000"));
}

module.exports = createApp;
