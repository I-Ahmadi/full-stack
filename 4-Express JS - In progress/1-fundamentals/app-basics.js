/*
  The Express App Object
  ----------------------
  The app object is your web application.

  Common app methods:
  - app.get(path, handler)
  - app.post(path, handler)
  - app.use(middleware)
  - app.set(name, value)
  - app.listen(port, callback)
*/

const express = require("express");

function createApp() {
  const app = express();

  app.set("appName", "Express lesson app");

  app.use((req, res, next) => {
    req.startedAt = Date.now();
    next();
  });

  app.get("/app-info", (req, res) => {
    res.json({
      appName: app.get("appName"),
      requestStartedAt: req.startedAt,
    });
  });

  return app;
}

if (require.main === module) {
  const app = createApp();
  app.listen(3000, () => console.log("Open http://localhost:3000/app-info"));
}

module.exports = createApp;
