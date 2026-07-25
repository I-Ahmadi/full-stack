/*
  Request Object
  --------------
  req represents the incoming HTTP request.

  Common properties:
  - req.method
  - req.originalUrl
  - req.params
  - req.query
  - req.body
  - req.headers
  - req.ip
*/

const express = require("express");

function createApp() {
  const app = express();
  app.use(express.json());

  app.post("/inspect/:id", (req, res) => {
    res.json({
      method: req.method,
      url: req.originalUrl,
      params: req.params,
      query: req.query,
      body: req.body,
      userAgent: req.get("user-agent"),
      ip: req.ip,
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Request object lesson on port 3000"));
}

module.exports = createApp;
