# Node.js 3 - File System

This folder teaches Node.js file-system basics using runnable examples.

## Recommended order

1. `file-system.js` - read, write, append, delete, callbacks, promises, and async/await
2. `path-safe-files.js` - `__dirname`, `path.join`, `path.resolve`, and safer file paths
3. `txt/` - sample text files used by the examples

## How to run

Open a terminal in this folder:

```powershell
cd "3-Node JS/3-file-system"
```

Run the main lesson:

```powershell
node file-system.js
```

Run the path-safety lesson:

```powershell
node path-safe-files.js
```

## What the examples create

Running `file-system.js` writes these files inside `txt/`:

- `output.txt`
- `callback-output.txt`
- `promise-output.txt`
- `final.txt`

It also creates and deletes `delete-me.txt` as a temporary demo.

## What to remember

- `fs` is Node's built-in file-system module.
- `fs.readFileSync` blocks the event loop.
- `fs.readFile` uses callbacks and is non-blocking.
- `fs/promises` gives promise-based file methods.
- `async/await` is usually the cleanest modern style.
- `path.join(__dirname, "txt", "file.txt")` is safer than fragile relative paths.
