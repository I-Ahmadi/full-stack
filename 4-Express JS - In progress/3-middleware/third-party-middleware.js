/*
  Third-Party Middleware
  ----------------------
  Third-party middleware is installed from npm.

  Common examples:
  - cors
  - helmet
  - morgan
  - cookie-parser
  - express-rate-limit

  Install examples:

    npm install cors helmet morgan cookie-parser express-rate-limit

  This file shows the shape without requiring those packages to be installed.
*/

const express = require("express");

function createApp() {
  const app = express();

  // Example if installed:
  // const helmet = require("helmet");
  // const cors = require("cors");
  // app.use(helmet());
  // app.use(cors({ origin: "http://localhost:5173" }));

  app.get("/", (req, res) => {
    res.json({
      message: "Third-party middleware usually comes from npm packages.",
      examples: ["cors", "helmet", "morgan", "cookie-parser"],
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Third-party middleware lesson on port 3000"));
}

module.exports = createApp;
