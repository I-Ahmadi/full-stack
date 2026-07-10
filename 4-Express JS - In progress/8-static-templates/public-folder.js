/*
  Public Folder
  -------------
  A public folder commonly contains:
  - CSS files
  - browser JavaScript
  - images
  - static HTML

  Example:

    app.use("/assets", express.static(path.join(__dirname, "public")));

  Then public/site.css is available at:

    /assets/site.css
*/

const path = require("path");

const publicPath = path.join(__dirname, "public");

console.log("Recommended public folder path:");
console.log(publicPath);
