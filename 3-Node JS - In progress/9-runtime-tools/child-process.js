/*
  child_process
  -------------
  Run this file:

    node child-process.js

  child_process lets Node run another program or command.
*/

const { execFile, spawn } = require("child_process");

execFile(process.execPath, ["--version"], (error, stdout, stderr) => {
  if (error) {
    console.error("execFile failed:", error.message);
    return;
  }

  if (stderr) {
    console.error(stderr);
  }

  console.log("Node version from child process:", stdout.trim());
});

const child = spawn(process.execPath, [
  "-e",
  "console.log('Hello from spawned Node process')",
]);

child.stdout.on("data", (chunk) => {
  console.log(chunk.toString().trim());
});

child.on("close", (code) => {
  console.log("Spawned process exited with code:", code);
});

/*
  execFile is good when you want all output collected for a known executable.
  spawn is good for streaming output from a long-running process.
*/
