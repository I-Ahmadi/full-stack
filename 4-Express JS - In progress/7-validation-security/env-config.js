/*
  Environment Config
  ------------------
  Environment variables keep config outside your source code.

  PowerShell example:

    $env:PORT="5000"; $env:NODE_ENV="production"; node 7-validation-security/env-config.js
*/

const express = require("express");

function createApp() {
  const app = express();

  const config = {
    nodeEnv: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT || 3000),
    databaseUrlIsSet: Boolean(process.env.DATABASE_URL),
  };

  app.get("/config", (req, res) => {
    res.json(config);
  });

  return { app, config };
}

if (require.main === module) {
  const { app, config } = createApp();
  app.listen(config.port, () => console.log(`Config lesson on port ${config.port}`));
}

module.exports = createApp;
