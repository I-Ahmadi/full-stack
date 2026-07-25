/*
  Repository Pattern
  ------------------
  A repository hides database details behind methods.

  Controllers/services call:
  - userRepository.findAll()
  - userRepository.findById(id)
  - userRepository.create(data)

  Later, you can swap in MongoDB/Postgres without rewriting controllers.
*/

const express = require("express");
const userModel = require("./crud-models");

const userRepository = {
  findAll() {
    return userModel.findMany();
  },

  findById(id) {
    return userModel.findById(id);
  },

  create(data) {
    return userModel.create(data);
  },
};

function createApp() {
  const app = express();
  app.use(express.json());

  app.get("/users", (req, res) => {
    res.json(userRepository.findAll());
  });

  app.post("/users", (req, res) => {
    const user = userRepository.create(req.body);
    res.status(201).json(user);
  });

  return app;
}

if (require.main === module) {
  userRepository.create({ name: "Aisha", email: "aisha@example.com" });
  createApp().listen(3000, () => console.log("Repository lesson on port 3000"));
}

module.exports = { createApp, userRepository };
