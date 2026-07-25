/*
  Built-in Middleware
  -------------------
  Express includes useful middleware:
  - express.json()
  - express.urlencoded()
  - express.static()
*/

const express = require("express");
const path = require("path");

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/static", express.static(path.join(__dirname, "..", "8-static-templates", "public")));

  app.post("/echo", (req, res) => {
    res.json({
      body: req.body,
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Built-in middleware lesson on port 3000"));
}

module.exports = createApp;
