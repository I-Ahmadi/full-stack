/*
  Server Listen
  -------------
  app.listen starts the HTTP server.

  In production, prefer process.env.PORT because hosting platforms usually
  provide the port through an environment variable.
*/

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is listening");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

module.exports = app;
