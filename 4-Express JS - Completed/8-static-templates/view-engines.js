/*
  View Engines
  ------------
  Express can render templates with:

    app.set("view engine", "ejs")
    app.set("views", path.join(__dirname, "views"))
    res.render("home", { title: "Home" })

  You must install the template engine package first:

    npm install ejs
*/

const express = require("express");
const path = require("path");

function createApp() {
  const app = express();

  app.set("views", path.join(__dirname, "views"));

  app.get("/view-engine-notes", (req, res) => {
    res.json({
      viewEngine: "ejs/pug/handlebars",
      renderExample: 'res.render("home", { title: "Home" })',
    });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("View engine notes on port 3000"));
}

module.exports = createApp;
