/*
Async/await is a modern way to handle asynchronous operations in Node.js, building on top of Promises to create 
even more readable code.

Async/await is basically Promises with a more readable syntax. This makes your code cleaner and more maintainable.

Async/await makes asynchronous code look and more feel like synchronous code. It does not block the 
main thread, but is easy to follow and understand.
*/

// Syntax and Usage
// The syntax consists of two keywords:

// async: Used to declare an asynchronous function that returns a Promise
// await: Used to pause execution until a Promise is resolved, can only be used inside async functions

// Example: Basic Async/Await
async function getData() {
  try {
    console.log('Starting......');
    const result = await someAsyncOperation();
    console.log(`Result: ${result}`);
    return result; 
  } catch (err) {
    console.error('Error getting data:', err.message)
    return;
  }
};

function someAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operation completed...'); 
    }, 1000)
  });
}

// Call the async function
getData().then(data => console.log('Final data:', data));

// Reading a File with Async/Await
const fs = require('fs');

async function readFile() {
  try {
    const data = await fs.readFile('myfile.txt', 'utf-8');
    console.log('Result: ', data);
  } catch(err) {
    console.error('Error reading file:', err.message);
  }
}

readFile();

// Error Handling with Try/Catch
// One of the advantages of async/await is that you can use traditional try/catch blocks for error handling, 
// making your code more readable.

async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data = await response.json();
    console.log(`User data:`, data);
    return data;
  } catch(error) {
    console.err('Error fetching user data:', error.message);
    throw error;
  }
}

// You can also mix async/await with Promise .catch() for different scenarios:

// Using catch with an async function
fetchUserData().catch(error => {
  console.log('Caught outside of async function:', error.message);
});

// Running Promises in Parallel
// Although async/await makes code look synchronous, sometimes you need to run operations in parallel 
// for better performance.

// Example: Sequential vs Parallel Operations
// Helper function to simulate an API call
function fetchData(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Data for ID ${id}`), 1000);
  });
}

// Sequential operation - takes ~3 seconds
async function fetchSequential() {
  console.time('sequential');
  const data1 = await fetchData(1);
  const data2 = await fetchData(2);
  const data3 = await fetchData(3);
  console.timeEnd('sequential');
  return [data1, data2, data3];
}

// Parallel operation - takes ~1 second
async function fetchParallel() {
  console.time('parallel');
  const results = await Promise.all([
    fetchData(1),
    fetchData(2),
    fetchData(3)
  ]);
  console.timeEnd('parallel');
  return results;
}

// Demo
async function runDemo() {
  console.log('Running sequentially...');
  const seqResults = await fetchSequential();
  console.log(seqResults);
  
  console.log('\nRunning in parallel...');
  const parResults = await fetchParallel();
  console.log(parResults);
}

runDemo();

// Async/Await vs Promises vs Callbacks
// Let's see how the same task is handled with different asynchronous patterns:

// With Callbacks
function getUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: 'John' });
  }, 1000);
}

function getUserPosts(user, callback) {
  setTimeout(() => {
    callback(null, ['Post 1', 'Post 2']);
  }, 1000);
}

// Using callbacks
getUser(1, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('User:', user);
  
  getUserPosts(user, (error, posts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Posts:', posts);
  });
});

// With Promises
function getUserPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John' });
    }, 1000);
  });
}

function getUserPostsPromise(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Post 1', 'Post 2']);
    }, 1000);
  });
}

// Using promises
getUserPromise(1)
  .then(user => {
    console.log('User:', user);
    return getUserPostsPromise(user);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error(error);
  });

// Using async/await
async function getUserAndPosts() {
  try {
    const user = await getUserPromise(1);
    console.log('User:', user);
    
    const posts = await getUserPostsPromise(user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error(error);
  }
}

getUserAndPosts();
