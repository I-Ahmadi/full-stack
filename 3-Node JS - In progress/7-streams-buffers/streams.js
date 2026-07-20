/*
  Streams
  -------
  Run this file:

    node streams.js

  This example compares reading a large file all at once vs using a stream.
*/

const fs   = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "test-file.txt");

function formatMB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const stats = fs.statSync(filePath);
console.log("File size:", formatMB(stats.size));

/*
  Reading all at once loads the whole file into memory.
  This is simple, but not ideal for large files or many users.
*/

const smallPreview = fs.readFileSync(filePath, "utf8").slice(0, 60);
console.log("\nReadFile preview:");
console.log(smallPreview);

/*
  Streaming reads chunks.
  You can begin processing before the whole file is loaded.
*/

const readable = fs.createReadStream(filePath, {
  encoding: "utf8",
  highWaterMark: 1024 * 1024,
});

let chunks = 0;
let totalCharacters = 0;

readable.on("data", (chunk) => {
  chunks += 1;
  totalCharacters += chunk.length;
});

readable.on("end", () => {
  console.log("\nStream finished");
  console.log("Chunks:", chunks);
  console.log("Characters:", totalCharacters);
});

readable.on("error", (error) => {
  console.error("Stream failed:", error.message);
});

/*
  Common stream types
  -------------------
  Readable   -> data can be read from it
  Writable   -> data can be written to it
  Duplex     -> readable and writable
  Transform  -> changes data as it passes through
*/
