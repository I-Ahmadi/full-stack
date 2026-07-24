/*
What is Asynchronous Programming?
In Node.js, asynchronous operations let your program do other work while waiting for tasks 
like file I/O or network requests to complete.

This non-blocking approach enables Node.js to handle thousands of concurrent 
connections efficiently.
*/

/*
Sync vs Async: Key Differences
* Synchronous
 - Blocks execution until complete
 - Simple to understand
 - Can cause delays
 - Uses functions like readFileSync
* Asynchronous
 - Non-blocking execution
 - Better performance
 - More complex to handle
 - Uses callbacks, promises, or async/await
*/

// Synchronous File Read
const fs = require('fs');

console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');

// Output will be in order: 1 → 2 → 3 (blocks between each step)

// Asynchronous File Read
const fs = require('fs');

console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');

// Output order: 1 → 3 → 2 (doesn't wait for file read to complete)

// Avoiding Callback Hell
// Problem: Nested Callbacks (Callback Hell)
getUser(userId, (err, user) => {
  if (err) return handleError(err);
  getOrders(user.id, (err, orders) => {
    if (err) return handleError(err);
    processOrders(orders, (err) => {
      if (err) return handleError(err);
      console.log('All done!');
    });
  });
});

// Solution: Use Promises
getUser(userId)
    .then((user) => getOrders(user.id))
    .then((orders) => proceddOrder(orders.id))
    .then(() => console.log('All done!'))
    .catch(() => handleError());

// Even Better: Async/Await
async function processUser(userId) {
  try {
    const user   = await getUser(userId);
    const orders = await getOrders(user.id);
    const isProcessed = await processOrders(orders);
    if (isProcessed) {
        console.log('Processed successfully!');
    }
    console.log('Failed to process');
  } catch (err) {
    console.error('Error proceesing order', err.message);
    handleError(err);
  }
}
