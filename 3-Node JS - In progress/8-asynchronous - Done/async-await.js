/*
  Async/Await
  -----------
  Run this file:

    node async-await.js

  async/await is syntax for working with promises in a readable sequence.
*/

const fs   = require("fs/promises");
const path = require("path");

const dogPath    = path.join(__dirname, "dog.txt");
const outputPath = path.join(__dirname, "dog-img.txt");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeDogImageApi(breed, number) {
  await wait(100);
  return `local-${breed.trim()}-${number}.jpg`;
}

async function sequentialExample(breed) {
  console.log("\nSequential requests");

  const first  = await fakeDogImageApi(breed, 1);
  const second = await fakeDogImageApi(breed, 2);
  const third  = await fakeDogImageApi(breed, 3);

  return [first, second, third];
}

async function parallelExample(breed) {
  console.log("\nParallel requests with Promise.all");

  return Promise.all([
    fakeDogImageApi(breed, 1),
    fakeDogImageApi(breed, 2),
    fakeDogImageApi(breed, 3),
  ]);
}

async function main() {
  try {
    const breed = await fs.readFile(dogPath, "utf8");
    console.log("Breed:", breed.trim());

    const sequentialStarted = Date.now();
    const sequentialImages  = await sequentialExample(breed);
    console.log("Images:", sequentialImages);
    console.log("Sequential time:", Date.now() - sequentialStarted, "ms");

    const parallelStarted = Date.now();
    const parallelImages  = await parallelExample(breed);
    console.log("Images:", parallelImages);
    console.log("Parallel time:", Date.now() - parallelStarted, "ms");

    await fs.writeFile(outputPath, `${parallelImages.join("\n")}\n`);
    console.log("\nWrote dog-img.txt");
  } catch (error) {
    console.error("Async/await lesson failed:", error.message);
    process.exitCode = 1;
  }
}

main();

/*
  Key ideas
  ---------
  - async functions always return promises.
  - await pauses the async function, not the whole Node process.
  - Use try/catch for async/await error handling.
  - Use Promise.all when independent tasks can run at the same time.
*/
