/*
  MVC Structure
  -------------
  MVC separates responsibilities:

  Model      -> data shape and database logic
  View       -> HTML/template returned to users
  Controller -> request/response logic

  API projects often use a similar split:
  routes -> controllers -> services -> repositories/models
*/

const express = require("express");

const courses = [{ id: 1, title: "Express Basics" }];

const courseService = {
  listCourses() {
    return courses;
  },
};

const courseController = {
  index(req, res) {
    res.json(courseService.listCourses());
  },
};

function createApp() {
  const app = express();

  app.get("/courses", courseController.index);

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("MVC lesson on port 3000"));
}

module.exports = createApp;
