/*
  Auth Basics
  -----------
  Authentication asks: who are you?
  Authorization asks: what are you allowed to do?

  This simple example uses a fake Bearer token for learning only.
*/

const express = require("express");

function requireAuth(req, res, next) {
  const authHeader = req.get("authorization") || "";
  const token = authHeader.replace("Bearer ", "");

  if (token !== "demo-token") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.user = { id: 1, name: "Demo User", role: "admin" };
  next();
}

function createApp() {
  const app = express();

  app.get("/public", (req, res) => {
    res.json({ message: "Anyone can see this" });
  });

  app.get("/private", requireAuth, (req, res) => {
    res.json({ message: "Authenticated", user: req.user });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Auth lesson on port 3000"));
}

module.exports = { createApp, requireAuth };
