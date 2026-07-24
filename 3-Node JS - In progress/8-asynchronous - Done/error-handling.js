/*
Why Handle Errors?
Errors are inevitable in any program, but how you handle them makes all the difference. In Node.js, proper error handling is crucial because:

- It prevents applications from crashing unexpectedly
- It provides meaningful feedback to users
- It makes debugging easier with proper error context
- It helps maintain application stability in production
- It ensures resources are properly cleaned up
*/

// Node.js follows several patterns for error handling:

// 1. Error-First Callbacks
// The most common pattern in Node.js core modules where the first argument to a callback is an error 
// object (if any occurred).

const fs = require('fs');

function readConfigFile(filename, callback) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            // Handle specific error types
            if (err.code === 'ENOENT') {
                return callback(new Error(`Config file ${filename} not found`))
            } else if (err.code === 'EACCES') {
                return callback(new Error(`No permission to read ${filename}`));
            }

            return callback(err);
        }

        // Process data if no error
        try {
            const config = JSON.parse(data);
            return callback(null, config);
        } catch(passError) {
            callback(new Error(`Invalid JSON in ${filename}`));
        }
    });
}

// usage
readConfigFile('config.json', (err, config) => {
    if (err) {
        console.error('Failed to read config file:', err.message);
        // Handle the error (e.g., use default config)
        return;
    }
    console.log('Config file loaded successfully!', config);
});

// 2. Modern Error Handling
// Using try...catch with Async/Await
// With async/await, you can use try/catch blocks for both synchronous and asynchronous code:

// Example: try/catch with Async/Await
const fs = require('fs').promises;

async function loadUserData(userId) {
  try {
    const data = await fs.readFile(`users/${userId}.json`, 'utf8');
    const user = JSON.parse(data);

    if (!user.email) {
      throw new Error('Invalid user data: missing email');
    }

    return user;
  } catch (error) {
    // Handle different error types
    if (error.code === 'ENOENT') {
      throw new Error(`User ${userId} not found`);
    } else if (error instanceof SyntaxError) {
      throw new Error('Invalid user data format');
    }
    // Re-throw other errors
    throw error;
  } finally {
    // Cleanup code that runs whether successful or not
    console.log(`Finished processing user ${userId}`);
  }
}

// Usage
(async () => {
  try {
    const user = await loadUserData(123);
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Failed to load user:', error.message);
    // Handle error (e.g., show to user, retry, etc.)
  }
})();

// 3. Custom Error Types
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name  = 'ValidationError';
    this.field = field;
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(`${resource} not found`);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

// Usage
function getUser(id) {
  if (!id) {
    throw new ValidationError('User ID is required', 'id');
  }
  // ...
}
