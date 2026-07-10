/*
  REST API App
  ------------
  Run:

    node 9-rest-api/app.js

  REST uses HTTP methods and resource URLs.
*/

const express = require("express");
const apiRoutes = require("./api-routes");

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", apiRoutes);

  app.get("/", (req, res) => {
    res.json({ message: "Express REST API lesson", try: "/api/tasks" });
  });

  app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
  });

  return app;
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  createApp().listen(port, () => console.log(`REST API running on port ${port}`));
}

module.exports = createApp;
