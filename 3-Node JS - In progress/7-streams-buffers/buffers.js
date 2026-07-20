/*
  Buffers
  -------
  Run this file:

    node buffers.js

  Buffers represent raw binary data.
  You see buffers when working with files, streams, TCP, images, uploads, and
  encrypted data.
*/

const text   = "Hello Node";
const buffer = Buffer.from(text, "utf8");

console.log("Original text:", text);
console.log("Buffer:", buffer);
console.log("Back to text:", buffer.toString("utf8"));
console.log("Bytes:", [...buffer]);

const emptyBuffer = Buffer.alloc(8);
emptyBuffer.write("Hi");

console.log("\nAllocated buffer:", emptyBuffer);
console.log("Allocated buffer as text:", emptyBuffer.toString("utf8"));

/*
  Encoding examples
*/

console.log("\nHex:", buffer.toString("hex"));
console.log("Base64:", buffer.toString("base64"));

/*
  Key ideas
  ---------
  - A string is human-readable text.
  - A Buffer is bytes.
  - Encoding tells Node how to convert between strings and bytes.
  - utf8 is the most common text encoding.
*/
