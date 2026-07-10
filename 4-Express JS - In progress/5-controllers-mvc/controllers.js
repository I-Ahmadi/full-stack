/*
  Controllers
  -----------
  Controllers receive req/res and decide what response to send.

  Keep controllers thin:
  - read request input
  - call a service
  - send response
*/

const express = require("express");

const users = [{ id: 1, name: "Aisha" }];

const userController = {
  getAllUsers(req, res) {
    res.json(users);
  },

  getUserById(req, res) {
    const user = users.find((item) => item.id === Number(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json(user);
  },
};

function createApp() {
  const app = express();

  app.get("/users", userController.getAllUsers);
  app.get("/users/:id", userController.getUserById);

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Controllers lesson on port 3000"));
}

module.exports = { createApp, userController };
