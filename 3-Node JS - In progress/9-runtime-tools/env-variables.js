/*
  Environment Variables
  ---------------------
  Run this file:

    node env-variables.js

  PowerShell example:

    $env:APP_MODE="production"; $env:PORT="5000"; node env-variables.js

  Environment variables are configuration values outside your source code.
*/

const appMode = process.env.APP_MODE || "development";
const port = Number(process.env.PORT || 3000);

console.log("APP_MODE:", appMode);
console.log("PORT:", port);

if (process.env.API_KEY) {
  console.log("API_KEY is set");
} else {
  console.log("API_KEY is not set");
}

/*
  Common uses
  -----------
  - PORT
  - NODE_ENV
  - DATABASE_URL
  - API keys
  - Feature flags

  Do not commit real secrets to git.
*/
