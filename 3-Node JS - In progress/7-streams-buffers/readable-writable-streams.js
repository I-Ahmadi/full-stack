/*
  Readable and Writable Streams
  -----------------------------
  Run this file:

    node readable-writable-streams.js

  Streams process data in chunks instead of loading everything into memory.
*/

const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "test-file.txt");
const outputPath = path.join(__dirname, "stream-output-preview.txt");

const readable = fs.createReadStream(inputPath, {
  encoding: "utf8",
  highWaterMark: 64 * 1024,
  start: 0,
  end: 256 * 1024 - 1,
});

const writable = fs.createWriteStream(outputPath);

let chunkCount = 0;
let characterCount = 0;

readable.on("data", (chunk) => {
  chunkCount += 1;
  characterCount += chunk.length;
});

readable.on("error", (error) => {
  console.error("Read failed:", error.message);
});

writable.on("finish", () => {
  console.log("Finished writing stream-output-preview.txt");
  console.log("Chunks read:", chunkCount);
  console.log("Characters read:", characterCount);
});

readable.pipe(writable);

/*
  readable.pipe(writable)
  -----------------------
  pipe connects a readable stream to a writable stream.

  It also handles backpressure, which means the readable side slows down when
  the writable side cannot keep up.

  This lesson writes only the first 256 KB of the large test file so the output
  stays small.
*/
