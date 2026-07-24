/*
What is the Path Module?
The Path module is a built-in Node.js module that provides tools for handling and 
transforming file paths across different operating systems.

Since Windows uses backslashes (\) and POSIX systems (Linux, macOS) use forward 
slashes (/), the Path module helps write cross-platform code that works correctly 
on any system.
*/

// Using the Path Module
// The Path module is a core module in Node.js, so no installation is needed.

// You can import it using either CommonJS or ES modules syntax:

const path = require('path');
// Destructure specific methods if needed
const { join, resolve, basename } = require('path');

import path from 'path';
// Or import specific methods
import { join, resolve, basename } from 'path';

// Path Module Methods:

// path.basename()
// Returns the last portion of a path, similar to the Unix basename command.

const path = require('path');

// Get filename from a path
const filename = path.basename('/users/docs/file.txt');
console.log(filename);

// Get filename without extension
const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt');
console.log(filenameWithoutExt);

// __dirname and __filename
// In Node.js, __dirname and __filename are special variables available in CommonJS modules that 
// provide the directory name and file name of the current module.

// CommonJS module (e.g., app.js)
const path = require('path');

// Get the directory name of the current module
console.log('Directory name:', __dirname);

// Get the file name of the current module
console.log('File name:', __filename);

// Building paths relative to the current module
const configPath = path.join(__dirname, 'config', 'app-config.json');
console.log('Config file path:', configPath);

// Getting the directory name using path.dirname()
console.log('Directory using path.dirname():', path.dirname(__filename));

// path.extname()
// Returns the extension of a path, from the last occurrence of the . character to 
// the end of the string.

const path = require('path');

const extension = path.extname('file.txt');
console.log(extension);

console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('.index'));

// path.join()
// Joins all given path segments together using the platform-specific separator as a 
// delimiter, then normalizes the resulting path.

// Example: Basic path joining
const path = require('path');

// Join path segments
const fullPath = path.join('/users', 'docs', 'file.txt');
console.log(fullPath); // \users\docs\file.txt

// Handle relative paths and navigation
console.log(path.join('/users', '../system', './logs', 'file.txt')); // /system/logs/file.txt

// Handle multiple slashes
console.log(path.join('users', '//docs', 'file.txt')); // users/docs/file.txt

// path.resolve()
// Resolves a sequence of paths or path segments into an absolute path, processing from right to 
// left until an absolute path is constructed.

// Example: Resolving paths
const path = require('path');

// 1. Resolve relative to current working directory
console.log(path.resolve('file.txt'));
// 2. Resolve with multiple segments
console.log(path.resolve('/users', 'docs', 'file.txt'));
// 3. Right-to-left processing
console.log(path.resolve('/first', '/second', 'third')); // '/second/third'
// 4. Using __dirname for module-relative paths
console.log(path.resolve(__dirname, 'config', 'app.json'));

// path.parse()
// Returns an object whose properties represent significant elements of the path.

// Example: Parsing a file path
const path = require('path');

// Parse a file path
const pathInfo = path.parse('/users/docs/file.txt');
console.log(pathInfo);
/* Output on Unix/macOS:
{
  root: '/',
  dir: '/users/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Accessing parsed components
console.log('Directory:', pathInfo.dir); // /users/docs
console.log('Filename:', pathInfo.base); // file.txt
console.log('Name only:', pathInfo.name); // file
console.log('Extension:', pathInfo.ext); // .txt
