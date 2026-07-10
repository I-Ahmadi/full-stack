/*
  Route Params and Query Strings
  ------------------------------
  Params are part of the path:

    /users/:id  -> req.params.id

  Query strings come after ?:

    /users?role=admin&page=1  -> req.query.role
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/users/:id", (req, res) => {
    res.json({
      id: req.params.id,
      includePosts: req.query.includePosts === "true",
    });
  });

  app.get("/search", (req, res) => {
    res.json({
      q: req.query.q || "",
      page: Number(req.query.page || 1),
      limit: Number(req.query.limit || 10),
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => {
    console.log("Try /users/42?includePosts=true or /search?q=node&page=2");
  });
}

module.exports = createApp;
