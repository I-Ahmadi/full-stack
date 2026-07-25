/*
  Routes Folder
  -------------
  In real apps, routes often live in files like:

    routes/userRoutes.js
    controllers/userController.js
    services/userService.js

  This file keeps them together so the idea is easy to see.
*/

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, title: "Route folder lesson" }]);
});

router.post("/", express.json(), (req, res) => {
  res.status(201).json({
    id: 2,
    title: req.body.title,
  });
});

function createApp() {
  const app = express();

  app.use("/lessons", router);

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /lessons"));
}

module.exports = { createApp, router };
