/*

# **Asynchronous JavaScript: Promises & Async/Await**

JavaScript has **two types of code**:

1. **Synchronous (normal) code** → runs immediately, line by line.
2. **Asynchronous (async) code** → runs later, after a slow task finishes (I/O, timers, API calls, etc.).

---

## **1️⃣ Promises**

A **Promise** represents a value that may be available now or in the future.

* **resolve()** → the task succeeded
* **reject()** → the task failed

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Yay! It worked!");
  } else {
    reject("Oops! Something went wrong.");
  }
});

---

## **1️⃣a then() and catch()**

`then()` and `catch()` are **methods of a Promise** used to handle asynchronous results.

* **then()** → runs when the promise **resolves successfully**
* **catch()** → runs when the promise **rejects (fails)**

### Example:
myPromise
  .then(result => console.log("Success:", result))  // runs if resolved
  .catch(err => console.log("Error:", err));        // runs if rejected

---

### **Chaining Promises**

You can chain multiple `then()` calls to handle **sequential async operations**:

function addOne(x) {
  return new Promise(resolve => resolve(x + 1));
}

addOne(5)
  .then(res => addOne(res))  // 6
  .then(res => addOne(res))  // 7
  .then(res => console.log(res)); // 8

> **Tip:** Chaining avoids deeply nested callbacks (callback hell).

---

## **2️⃣ Async/Await (Modern way)**

`async/await` is **syntactic sugar** for promises. It makes asynchronous code look **synchronous**, improving readability.

* `async` → marks a function as asynchronous, always returns a Promise
* `await` → pauses the function until the promise resolves, **without blocking the event loop**

### Example:

async function loadData() {
  try {
    const user     = await getUser();
    const posts    = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
  } catch (err) {
    console.error('An error occured while loading data: ', err);
  }
}

---

### **Async/Await with Example**

function getData() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("Got Data!");
    else reject("Something went wrong.");
  });
}

async function main() {
  const data = await getData();
  console.log("Data:", data);
}

main();

---

## **3️⃣ Sequential vs Parallel Execution**

### **Sequential (one after another)**

async function main() {
  const res1 = await getData1();
  const res2 = await getData2();
  const res3 = await getData3();
  console.log(res1, res2, res3);
}

### **Parallel (run all at once)**

const results = await Promise.all([getData1(), getData2(), getData3()]);
console.log(results);

> **Tip:** Use `Promise.all()` when tasks are independent. It’s faster than sequential `await`.

---

## **4️⃣ Why Async/Await & Promises Are Useful**

Without Promises or async/await, nested callbacks cause **callback hell**:

getData1(res1 => {
  getData2(res2 => {
    getData3(res3 => {
      console.log(res1, res2, res3);
    });
  });
});

With Promises / async-await, code becomes **cleaner, readable, and maintainable**.

---

## **5️⃣ Key Notes**

* **Async code does not block the main thread**.
* **Promises** → easier handling of async tasks than callbacks.
* **then()/catch()** → handle resolved or rejected promises.
* **async/await** → makes async code readable and maintainable.
* Use **Promise.all()** for parallel async tasks.
* `try/catch` works with `async/await` for error handling.
* Avoid **callback hell** — it’s messy and hard to debug.

---

### ✅ **Mental Model**

*/

// --------------------------------------------------------------------------------

const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😢');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file 😢');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map(el => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);

    throw err;
  }
  return '2: READY 🐶';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('ERROR 💥');
  }
})();

// --------------------------------------------------------------------------------

// getDogPic()
//   .then(x => {
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   })
//   .catch(err => {
//     console.log('ERROR 💥');
//   });

// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => {
//     console.log(res.body.message);
//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to file!');
//   })
//   .catch(err => {
//     console.log('An error occured: ', err);
//   });
