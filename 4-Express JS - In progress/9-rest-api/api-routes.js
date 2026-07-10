/*
  API Routes
  ----------
  Good REST URLs use nouns, not verbs:

    GET /api/tasks
    POST /api/tasks
    GET /api/tasks/:id
*/

const express = require("express");

const router = express.Router();

let tasks = [
  { id: 1, title: "Learn routing", done: true },
  { id: 2, title: "Build REST API", done: false },
];

router.get("/tasks", (req, res) => {
  res.json({ count: tasks.length, tasks });
});

router.get("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  res.json(task);
});

router.post("/tasks", (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

router.patch("/tasks/:id", (req, res) => {
  const task = tasks.find((item) => item.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });

  Object.assign(task, req.body);
  res.json(task);
});

router.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((item) => item.id !== Number(req.params.id));
  res.status(204).end();
});

module.exports = router;
