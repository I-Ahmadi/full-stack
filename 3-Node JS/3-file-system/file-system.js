// =====================================
// File System (fs) Module in Node.js
// =====================================

const fs = require('fs');
const path = require('path');

const txtPath = fileName => path.join(__dirname, 'txt', fileName);

/*
The fs module allows Node.js to interact with the file system.

You can work with files in TWO ways:
1. Synchronous (Blocking)
2. Asynchronous (Non-blocking)

--------------------------------------
1️⃣ Synchronous (Blocking) Methods
--------------------------------------

⚠️ Blocking means:
- Code execution STOPS until the operation finishes
- The event loop is blocked
- Not recommended for servers

✅ Used mainly for:
- CLI tools
- Learning purposes
- Startup scripts
- One-time scripts
*/

// --------------------
// Read File (Sync)
// --------------------
try {
  const textIn = fs.readFileSync(txtPath('input.txt'), 'utf-8');
  console.log('Text In:', textIn);

  const textOut = `This is what we know about the avocado: ${textIn}. Created on ${Date.now()}`;

  console.log('Text Out:', textOut);

  // Write File (Sync)
  fs.writeFileSync(txtPath('output.txt'), textOut);
  console.log('File written successfully!');

} catch (error) {
  console.error('Error occurred:', error);
}

// --------------------
// Append File (Sync)
// --------------------
try {
  fs.appendFileSync(txtPath('final.txt'), '\nUpdated content');
  console.log('File updated successfully!');
} catch (error) {
  console.error('Error occurred:', error);
}

// --------------------
// Delete File (Sync)
// --------------------
try {
  fs.writeFileSync(txtPath('delete-me.txt'), 'Temporary file for delete demo');
  fs.unlinkSync(txtPath('delete-me.txt'));
  console.log('File deleted successfully!');
} catch (error) {
  console.error('Error occurred:', error);
}

/*
--------------------------------------
2️⃣ Asynchronous (Non-blocking) Methods
--------------------------------------

✅ Non-blocking means:
- Code continues executing
- File operations run in the background
- Callbacks / Promises / async-await handle results

✅ Used for:
- Servers
- APIs
- Real-world applications
*/

// --------------------
// Write, Read, Append and Delete File (Async)
// --------------------
fs.writeFile(txtPath('newfile.txt'), 'Hello, World!', err => {
  if (err) return console.error('Error writing file:', err);
  console.log('File written successfully!');

  fs.readFile(txtPath('newfile.txt'), 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);
    console.log('File read successfully:', data);

    fs.appendFile(txtPath('newfile.txt'), '\nAppended text!', err => {
      if (err) return console.error('Error appending file:', err);
      console.log('File appended successfully!');

      fs.unlink(txtPath('newfile.txt'), err => {
        if (err) return console.error('Error deleting file:', err);
        console.log('File deleted successfully!');
      });
    });
  });
});

/*
--------------------------------------
3️⃣ Callback Hell (Problem)
--------------------------------------

Nested callbacks make code:
❌ Hard to read
❌ Hard to debug
❌ Hard to maintain
*/

fs.readFile(txtPath('start.txt'), 'utf-8', (err, data1) => {
  if (err) return console.error(err);

  fs.readFile(txtPath(`${data1.trim()}.txt`), 'utf-8', (err, data2) => {
    if (err) return console.error(err);

    fs.readFile(txtPath('append.txt'), 'utf-8', (err, data3) => {
      if (err) return console.error(err);

      fs.writeFile(txtPath('final.txt'), `${data2} ${data3}`, err => {
        if (err) return console.error(err);
        console.log('File written successfully!');
      });
    });
  });
});

/*
--------------------------------------
4️⃣ __dirname (Best Practice)
--------------------------------------

__dirname gives the ABSOLUTE path
Prevents path issues across OS (Windows / Linux / Mac)
*/

const filePath = txtPath('input.txt');
const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);

/*
--------------------------------------
5️⃣ Promises with fs (Modern)
--------------------------------------

⚠️ fs.readFile DOES NOT return a Promise by default
We must use fs.promises
*/

const fsPromises = require('fs/promises');

fsPromises.readFile(txtPath('start.txt'), 'utf-8')
  .then(data1 => fsPromises.readFile(txtPath(`${data1.trim()}.txt`)))
  .then(data2 =>
    fsPromises.readFile(txtPath('append.txt'), 'utf-8')
      .then(data3 => fsPromises.writeFile(txtPath('final.txt'), `${data2} ${data3}`))
  )
  .then(() => console.log('File written successfully!'))
  .catch(err => console.error(err));

/*
--------------------------------------
6️⃣ Async / Await (Best & Cleanest)
--------------------------------------
*/

async function readFiles() {
  try {
    const data1 = await fsPromises.readFile(txtPath('start.txt'), 'utf-8');
    const data2 = await fsPromises.readFile(txtPath(`${data1.trim()}.txt`), 'utf-8');
    const data3 = await fsPromises.readFile(txtPath('append.txt'), 'utf-8');

    await fsPromises.writeFile(txtPath('final.txt'), `${data2} ${data3}`);
    console.log('File written successfully!');
  } catch (err) {
    console.error('Error occurred while reading files:', err);
  }
}

readFiles();

/*
--------------------------------------
7️⃣ Key Takeaways (IMPORTANT)
--------------------------------------

✔ Synchronous fs methods block the event loop
✔ Asynchronous fs methods are non-blocking
✔ Callback hell happens with nested callbacks
✔ Promises improve readability
✔ async/await is the cleanest solution
✔ Always use __dirname for file paths
✔ Use fs/promises for modern Node.js

--------------------------------------
Mental Model:
--------------------------------------

User request
→ Node.js
→ fs module
→ OS file system
→ callback / promise resolves later
*/
