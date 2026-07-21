/*
  Node.js File System
  -------------------
  Run this file:

    node file-system.js

  The Node.js File System module (fs) provides a comprehensive set of methods for working 
  with the file system on your computer.

  You can:
  - Read files
  - Write files
  - Append to files
  - Delete files
  - Create folders
  - Inspect file information

  This file teaches four styles:
  1. Synchronous fs methods
  2. Callback-based async fs methods
  3. Promise-based fs methods
  4. async/await with fs/promises
*/

// Importing the File System Module
// You can import the File System module using CommonJS require() or ES modules import syntax:

const fs = require("fs"); // CommonJS
// import fs from "fs"; // ES modules
import { readFile, writeFile } from "fs/promises"; // ES modules with named imports

// Promise-based API
// Node.js provides promise-based versions of the File System API in the fs/promises namespace, 
// which is recommended for modern applications:

// Using promises (Node.js 10.0.0+)
const fs = require('fs').promises;

// Or with destructuring
const { readFile, writeFile } = require('fs').promises;

// Or with ES modules
import { readFile, writeFile } from 'fs/promises';

/*
  Callback-based async file methods
  ------------------------------------
  Async means non-blocking.

  Node.js starts the operation, keeps going, and later runs your callback.

  The callback receives:
  - error as the first argument
  - data/result as the second argument when there is one
*/

const fs = require('fs');

fs.readFile('myfile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file: ', err);
    return;
  }
  // data is a string containing the file content
  console.log('File contents: ', data);
})

// For binary data (like images), omit the encoding
fs.readFile('image.png', (err, data) => {
  if (err) {
    console.error('Error reading image: ', err);
    return;
  }
  // data is a Buffer containing the file content
  console.log('Image size:', data.length, 'bytes');
});

// ** Reading Files with Promises
// Using fs.promises or util.promisify for cleaner async/await syntax:

const fs = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile('myfile.txt', 'utf-8');
    console.log('File contents: ', data);
  } catch(err) {
    console.error('Error reading file: ', err.message);
  }
}

readFileAsync();

// ** Reading Files Synchronously
// Synchronous means blocking.
// Node.js waits for the operation to finish before moving to the next line.

try {
  const input  = fs.readFileSync(__dirname + "/txt/input.txt", "utf8");
  const output = `SYNC OUTPUT\n${input}\nCreated with fs.readFileSync and fs.writeFileSync.\n`;

  fs.writeFileSync(__dirname + "/txt/output.txt", output);
  fs.appendFileSync(__dirname + "/txt/output.txt", "Appended with fs.appendFileSync.\n");

  console.log("Read input.txt");
  console.log("Wrote output.txt");
  console.log("output.txt size:", stats.size, "bytes\n");
} catch (error) {
  console.error("Sync example failed:", error.message);
}

// ** Creating and Writing Files
// Node.js provides several methods for creating and writing to files.

const fs = require('fs').promises;

// 1. Using fs.writeFile()
async function writeToFileAsync() {
  try {
    await fs.writeFile('myfile.txt', 'Hello, Node.JS!', 'utf-8');

    // Write JSON data
    const data = { name: 'John', age: 30, city: 'New York' };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
    
    console.log('Files created successfully!');
  } catch(err) {
    console.error('Error writing to a file: ', err.message);
  }
}

writeToFileAsync();

// 2. Using fs.appendFile()
async function appendToFileAsync() {
  try {
    const logEntry = `${new Date().toDateString()}: Application started\n`;
    await fs.appendFile('app.log', logEntry, 'utf-8');
    
    console.log('Log entry added successfully!');
  } catch(err) {
    console.error('Error appending to file: ', err.message);
  }
}

appendToFileAsync();

// 3. Deleting a Single File
// Use fs.unlink() to delete a file:

async function deleteFile() {
  const filePath = __dirname + 'myfile.txt';
  try {
    // Check if file exists
    await fs.access(filePath);

    // Delete the file
    await fs.unlink(filePath);
    console.log('File deleted successfully');
  } catch(err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file: ', err.message);
    }
  }
}

deleteFile();

// 4. Deleting Multiple Files
// To delete multiple files, you can use Promise.all() with fs.unlink():
const path = require('path');

async function deleteFiles() {
  const filesToDelete = [
    'temp1.txt',
    'temp2.txt',
    'temp3.txt'
  ];

  try {
    // Delete all files in parallel
    await Promise.all(
      filesToDelete.map(file =>
        fs.unlink(file).catch(err => {
          if (err.code !== 'ENOENT') {
            console.error(`Error deleting ${file}:`, err);
          }
        })
      )
    );
    console.log('Files deleted successfully');
  } catch (err) {
    console.error('Error during file deletion:', err);
  }
}

deleteFiles();

// 5. Renaming and Moving Files
// The fs.rename() method can be used for both renaming and moving files.

// It's a versatile method for file system operations that involve changing file paths.

// 1. Basic File Renaming
// To rename a file in the same directory:

// Example: Renaming a file
const fs = require('fs').promises;

async function renameFile() {
  const oldPath = 'old-name.txt';
  const newPath = 'new-name.txt';

  try {
    // Check if source file exists
    await fs.access(oldPath);

    // Check if destination file already exists
    try {
      await fs.access(newPath);
      console.log('Destination file already exists');
      return;
    } catch (err) {
      // Destination doesn't exist, safe to proceed
    }

    // Perform the rename
    await fs.rename(oldPath, newPath);
    console.log('File renamed successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else {
      console.error('Error renaming file:', err);
    }
  }
}

// Usage
renameFile();

// Moving Files Between Directories
// You can use fs.rename() to move files between directories:

// Example: Moving a file to a different directory
const fs   = require('fs').promises;
const path = require('path');

async function moveFile() {
  const sourceFile = 'source/file.txt';
  const targetDir  = 'destination';
  const targetFile = path.join(targetDir, 'file.txt');

  try {
    // Ensure source file exists
    await fs.access(sourceFile);

    // Create target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Move the file
    await fs.rename(sourceFile, targetFile);

    console.log('File moved successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else if (err.code === 'EXDEV') {
      console.log('Cross-device move detected, using copy+delete fallback');
      await moveAcrossDevices(sourceFile, targetFile);
    } else {
      console.error('Error moving file:', err);
    }
  }
}

// Helper function for cross-device moves
async function moveAcrossDevices(source, target) {
  try {
    // Copy the file
    await fs.copyFile(source, target);

    // Delete the original
    await fs.unlink(source);

    console.log('File moved across devices successfully');
  } catch (err) {
    // Clean up if something went wrong
    try { await fs.unlink(target); } catch (e) {}
    throw err;
  }
}

// Usage
moveFile();
