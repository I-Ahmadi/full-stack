/*
  Callbacks and Promises
  ----------------------
  Run this file:

    node callbacks-promises.js

  A callback is a function passed into another function to run later.
  A Promise is an object representing a future success or failure.
*/

const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

const dogPath = path.join(__dirname, "dog.txt");
const outputPath = path.join(__dirname, "dog-img.txt");

/*
  1. Callback style
*/

fs.readFile(dogPath, "utf8", (error, breed) => {
  if (error) {
    console.error("Callback read failed:", error.message);
    return;
  }

  console.log("1. Callback breed:", breed.trim());
});

/*
  2. Promise style
*/

function fakeDogImageApi(breed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`local-image-for-${breed.trim()}.jpg`);
    }, 100);
  });
}

fsPromises
  .readFile(dogPath, "utf8")
  .then((breed) => {
    console.log("2. Promise breed:", breed.trim());
    return fakeDogImageApi(breed);
  })
  .then((imageName) => fsPromises.writeFile(outputPath, `${imageName}\n`))
  .then(() => {
    console.log("3. Promise wrote dog-img.txt");
  })
  .catch((error) => {
    console.error("Promise chain failed:", error.message);
  });

/*
  Key idea
  --------
  Callbacks can become deeply nested.
  Promises allow chaining with .then() and centralized errors with .catch().
*/
