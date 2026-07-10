/*
  express.Router
  --------------
  Router lets you group related routes.

  In bigger apps, each feature often gets its own router file.
*/

const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.json([{ id: 1, name: "Aisha" }]);
});

usersRouter.get("/:id", (req, res) => {
  res.json({ id: Number(req.params.id), name: "Aisha" });
});

function createApp() {
  const app = express();

  app.use("/users", usersRouter);

  app.get("/", (req, res) => {
    res.send("Try /users or /users/1");
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Router lesson on port 3000"));
}

module.exports = { createApp, usersRouter };
