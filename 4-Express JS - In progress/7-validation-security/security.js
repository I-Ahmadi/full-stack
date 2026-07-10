/*
  Security Basics
  ---------------
  Practical Express security habits:
  - validate input
  - use HTTPS in production
  - set secure headers, commonly with helmet
  - configure CORS intentionally
  - rate-limit sensitive routes
  - do not leak stack traces in production
*/

const express = require("express");

function createApp() {
  const app = express();

  app.disable("x-powered-by");

  app.use((req, res, next) => {
    res.set("X-Content-Type-Options", "nosniff");
    res.set("X-Frame-Options", "DENY");
    next();
  });

  app.get("/security-check", (req, res) => {
    res.json({
      poweredByHeaderDisabled: true,
      note: "Use helmet, cors, and rate limiting packages in production apps.",
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Security lesson on port 3000"));
}

module.exports = createApp;
