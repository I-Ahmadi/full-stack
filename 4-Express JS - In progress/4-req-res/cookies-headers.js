/*
  Cookies and Headers
  -------------------
  Headers are metadata sent with requests and responses.
  Cookies are small values stored by the browser and sent on later requests.
*/

const express = require("express");

function createApp() {
  const app = express();

  app.get("/headers", (req, res) => {
    res.set("X-Lesson", "cookies-headers");
    res.json({
      accept: req.get("accept"),
      userAgent: req.get("user-agent"),
    });
  });

  app.get("/set-cookie", (req, res) => {
    res.cookie("theme", "dark", {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({ message: "Cookie set" });
  });

  return app;
}

if (require.main === module) {
  createApp().listen(3000, () => console.log("Try /headers and /set-cookie"));
}

module.exports = createApp;
