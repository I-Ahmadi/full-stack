/*
  npm Scripts
  -----------
  Run this file directly:
    node npm-scripts.js
  Or run it through npm:
    npm run scripts
  npm scripts are command shortcuts stored in package.json.
*/

console.log("1. This JavaScript file is running.");

/*
  When a script is run by npm, npm sets environment variables.
  npm_lifecycle_event contains the script name that was used.
  Example:
    npm run scripts
  npm_lifecycle_event will be:
    scripts
*/

console.log("\n2. Script name from npm:");
console.log(process.env.npm_lifecycle_event || "Not started by npm");

/*
  Common script names
  -------------------
  start: run the app
  dev: run the app in development mode
  test: run tests
  build: create production-ready output
  lint: check code quality
  format: format code

  You can create your own script names too.
*/

const scriptExamples = {
  start: "node packages-mgt.js",
  dev: "node npm-scripts.js",
  test: "node -e \"console.log('No tests yet')\"",
  lesson: "node package-json.js",
};

console.log("\n3. Example scripts:");
console.table(scriptExamples);

/*
  How scripts are run
  -------------------
  start is special:
    npm start
  Most scripts use:
    npm run script-name
  Examples:
    npm run dev
    npm run test
    npm run lesson
*/

console.log("\n4. Try these commands:");
console.log("npm start");
console.log("npm run dev");
console.log("npm run lesson");
console.log("npm test");

/*
  Why scripts are useful
  ----------------------
  They make commands consistent for everyone on the project.

  Instead of remembering long commands, teammates can run the same short npm
  scripts on Windows, macOS, or Linux.
*/
