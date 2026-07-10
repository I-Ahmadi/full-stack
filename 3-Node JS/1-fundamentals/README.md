# Node.js 1 - Basics

This folder teaches the first Node.js topics using comments and runnable examples.

## Recommended order

1. `node-basic.js` - what Node.js is, what npm is, and how async code works
2. `globals.js` - Node.js globals like `__dirname`, `__filename`, `require`, `module`, `process`, and `Buffer`
3. `path-os.js` - built-in `path` and `os` modules
4. `process.js` - command-line arguments, environment variables, output streams, and exit codes

## How to run

Open a terminal in this folder:

```powershell
cd "3-Node JS/1-basics"
```

Run each file:

```powershell
node node-basic.js
node globals.js
node path-os.js
node process.js
```

Try `process.js` with arguments:

```powershell
node process.js Aisha backend
```

Try `process.js` with an environment variable in PowerShell:

```powershell
$env:APP_MODE="development"; node process.js
```

## What to remember

- JavaScript is the language.
- Node.js is the runtime that runs JavaScript outside the browser.
- npm installs reusable packages.
- Built-in modules like `path`, `os`, `fs`, and `http` come with Node.js.
- Async code lets Node.js continue working while slow tasks finish.
