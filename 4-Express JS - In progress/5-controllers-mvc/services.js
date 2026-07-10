/*
  Services
  --------
  Services hold business logic.

  Controllers should not know every detail of how work gets done.
*/

const express = require("express");

const users = [{ id: 1, name: "Aisha", active: true }];

const userService = {
  listActiveUsers() {
    return users.filter((user) => user.active);
  },

  createUser(input) {
    const user = {
      id: users.length + 1,
      name: input.name,
      active: true,
    };

    users.push(user);
    return user;
  },
};

function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/users", (req, res) => {
    res.json(userService.listActiveUsers());
  });

  app.post("/users", (req, res) => {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Services lesson on port 3000"));
}

module.exports = { createApp, userService };
