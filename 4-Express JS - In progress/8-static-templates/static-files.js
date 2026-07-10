/*
  Static Files
  ------------
  express.static serves files from a folder.

  The folder name is not part of the URL unless you mount it with a prefix.
*/

const express = require("express");
const path = require("path");

function createApp() {
  const app = express();

  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.send("Open /hello.html after creating public/hello.html");
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Static lesson on port 3000"));
}

module.exports = createApp;
