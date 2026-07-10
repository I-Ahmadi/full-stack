/*
  Templates
  ---------
  Templates generate HTML using data.

  Popular Express template engines:
  - pug
  - ejs
  - handlebars

  For API-only backends, you often send JSON instead of templates.
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/manual-template", (req, res) => {
    const user = "Aisha";
    res.type("html").send(`
      <h1>Hello ${user}</h1>
      <p>This is manual HTML. Template engines make this cleaner.</p>
    `);
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /manual-template"));
}

module.exports = createApp;
