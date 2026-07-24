/*
Promises in Node.js provide a cleaner way to handle asynchronous operations 
compared to traditional callbacks.

Promises represent the completion (or failure) of an asynchronous 
operation and its result.

Promise States:
* Pending: Initial state, operation not completed
* Fulfilled: Operation completed successfully
* Rejected: Operation failed

Once a promise is settled (either fulfilled or rejected), its state cannot change.
*/

// Benefits of Using Promises:
// With Callbacks
getUser(id, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    // Process orders...
  });
});

// With Promises
getUser(id)
  .then(user => getOrders(user.id))
  .then(orders => processOrders(orders))
  .catch(handleError);

// Creating and Using Promises
// Promises can be created using the Promise constructor, which accepts an executor function with two 
// parameters: resolve and reject.

// Basic Promise Creation:
// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation (e.g., API call, file read)
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve('Operation completed successfully');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000); // Simulate delay
});

// Using the Promise
myPromise
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));

// Reading a File with Promises
const fs       = require('fs').promises;
const promise1 = Promise.resolve('First result');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));
const promise3 = fs.readFile('myfile.txt', 'utf8'); // Read local file instead of fetch

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('Results:', results);
    // results[0] is from promise1
    // results[1] is from promise2
    // results[2] is the content of myfile.txt
  })
  .catch(error => {
    console.error('Error in one of the promises:', error);
  });

// -----------------------------

// Promise.then()
// The then() method takes up to two arguments. The arguments are callback 
// functions for the success and failure cases for the Promise.

myPromise
  .then(
    result => console.log(result),
    error => console.error(error)
  );

// Promise.catch()
// The catch() method handles rejected promises and is equivalent to 
// .then(null, errorHandler).

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Promise.finally()
// The finally() method executes code regardless of whether the promise 
// is fulfilled or rejected.

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Operation completed'));

// Error Handling in Promises
// Proper error handling is important.

// Promises provide several ways to handle errors:

// Example: Error Handling in Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an error
    reject(new Error('Network error'));
  });
}

fetchData()
  .then(
    data => console.log('Data:', data),
    error => console.log('Error handled in then:', error.message)
  );

// Alternative method using catch
fetchData()
  .then(data => console.log('Data:', data))
  .catch(error => console.log('Error handled in catch:', error.message));
