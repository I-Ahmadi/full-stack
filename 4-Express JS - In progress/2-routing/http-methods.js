/*
  HTTP Methods
  ------------
  GET    read data
  POST   create data
  PUT    replace data
  PATCH  partially update data
  DELETE remove data
*/

const express = require("express");

function createApp() {
  const app = express();

  app.use(express.json());

  const tasks = [{ id: 1, title: "Learn Express", done: false }];

  app.get("/tasks", (req, res) => res.json(tasks));

  app.post("/tasks", (req, res) => {
    const task = { id: tasks.length + 1, title: req.body.title, done: false };
    tasks.push(task);
    res.status(201).json(task);
  });

  app.patch("/tasks/:id", (req, res) => {
    const task = tasks.find((item) => item.id === Number(req.params.id));
    if (!task) return res.status(404).json({ error: "Task not found" });

    Object.assign(task, req.body);
    res.json(task);
  });

  app.delete("/tasks/:id", (req, res) => {
    const index = tasks.findIndex((item) => item.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Task not found" });

    tasks.splice(index, 1);
    res.status(204).end();
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("HTTP methods lesson on port 3000"));
}

module.exports = createApp;
