/*
  package.json
  ------------
  Run this file:

    node package-json.js

  package.json is the main project metadata file for a Node.js project.

  It tells npm:
  - Project name
  - Version
  - Main entry file
  - Scripts
  - Dependencies
  - Dev dependencies
  - License
*/

const packageJson = require("./package.json");

console.log("1. Basic metadata");
console.log("Name:", packageJson.name);
console.log("Version:", packageJson.version);
console.log("Description:", packageJson.description);
console.log("Main entry:", packageJson.main);

/*
  main
  ----
  main is the default file Node loads when another project imports your package.

  Example:

    const myPackage = require("my-package");

  npm checks the package's main field to know which file to load.
*/

/*
  scripts
  -------
  scripts are shortcuts for project commands.

  You run them with:

    npm run script-name

  Special case:

    npm start

  works without typing "run".
*/

console.log("\n2. Scripts");
console.table(packageJson.scripts);

/*
  dependencies
  ------------
  Needed by the app when it runs.

  Example:

    npm install express

  Adds:

    "dependencies": {
      "express": "^4.18.2"
    }
*/

console.log("\n3. Dependencies");
console.log(packageJson.dependencies || "No production dependencies installed.");

/*
  devDependencies
  ---------------
  Needed only during development.

  Example:

    npm install -D nodemon

  Adds:

    "devDependencies": {
      "nodemon": "^3.1.0"
    }
*/

console.log("\n4. Dev dependencies");
console.log(packageJson.devDependencies || "No development dependencies installed.");

/*
  Semantic versioning
  -------------------
  Many npm packages use this version pattern:

    MAJOR.MINOR.PATCH

  Example:

    4.18.2

  MAJOR: breaking changes
  MINOR: new features that should not break old code
  PATCH: bug fixes

  Version symbols:

    "express": "4.18.2"   exact version only
    "express": "^4.18.2"  allow minor and patch updates
    "express": "~4.18.2"  allow patch updates only
*/

console.log("\n5. Version symbols");
console.table([
  { symbol: "none", example: "4.18.2", meaning: "Install exactly 4.18.2" },
  { symbol: "^", example: "^4.18.2", meaning: "Allow compatible minor and patch updates" },
  { symbol: "~", example: "~4.18.2", meaning: "Allow patch updates only" },
]);
