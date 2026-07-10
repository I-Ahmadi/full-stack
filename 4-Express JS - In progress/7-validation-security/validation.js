/*
  Validation
  ----------
  Never trust input from clients.

  Validate:
  - required fields
  - types
  - length
  - allowed values
*/

const express = require("express");

function validateCreateUser(req, res, next) {
  const { name, email } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "name is required" });
  }

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "valid email is required" });
  }

  next();
}

function createApp() {
  const app = express();
  app.use(express.json());

  app.post("/users", validateCreateUser, (req, res) => {
    res.status(201).json({ id: 1, ...req.body });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Validation lesson on port 3000"));
}

module.exports = { createApp, validateCreateUser };
