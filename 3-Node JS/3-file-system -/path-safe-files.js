/*
  Path-Safe File Access
  ---------------------
  Run this file:

    node path-safe-files.js

  This lesson is about building file paths safely.

  Bad idea:

    fs.readFileSync("txt/input.txt", "utf8")

  That path depends on where you run the node command from.

  Better idea:

    path.join(__dirname, "txt", "input.txt")

  __dirname is the folder where this JavaScript file lives.
  path.join uses the correct separator for your operating system.
*/

const fs   = require("fs/promises");
const path = require("path");

const txtFolder = path.join(__dirname, "txt");

function getTxtPath(fileName) {
  return path.join(txtFolder, fileName);
}

async function main() {
  const safePath = getTxtPath("input.txt");

  console.log("1. Folder where this JS file lives:");
  console.log(__dirname);

  console.log("\n2. Current working directory:");
  console.log(process.cwd());

  console.log("\n3. Safe file path:");
  console.log(safePath);

  const text = await fs.readFile(safePath, "utf8");

  console.log("\n4. File content:");
  console.log(text);

  /*
    path.resolve can also create absolute paths.
    path.normalize can clean up extra slashes and .. segments.
  */

  const messyPath = path.join(__dirname, "txt", "..", "txt", "input.txt");

  console.log("\n5. Normalized path:");
  console.log(path.normalize(messyPath));

  /*
    Security note:

    If a user gives you a file name, do not blindly trust it.
    A value like ../../secret.txt could try to escape your intended folder.
  */

  const userFileName = "read-this.txt";
  const requestedPath = path.resolve(txtFolder, userFileName);
  const allowedFolder = path.resolve(txtFolder);

  if (!requestedPath.startsWith(allowedFolder)) {
    throw new Error("Blocked unsafe path");
  }

  const requestedText = await fs.readFile(requestedPath, "utf8");

  console.log("\n6. Safely read user-requested file:");
  console.log(requestedText);
}

main().catch((error) => {
  console.error("Path-safe lesson failed:", error.message);
  process.exitCode = 1;
});
