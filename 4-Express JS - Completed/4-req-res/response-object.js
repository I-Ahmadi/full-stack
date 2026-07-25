/*
  Response Object
  ---------------
  res sends data back to the client.

  Common methods:
  - res.send()
  - res.json()
  - res.status()
  - res.redirect()
  - res.set()
  - res.cookie()
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/text", (req, res) => {
    res.send("Plain text response");
  });

  app.get("/json", (req, res) => {
    res.status(200).json({ message: "JSON response" });
  });

  app.get("/redirect", (req, res) => {
    res.redirect("/json");
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /text, /json, /redirect"));
}

module.exports = createApp;
