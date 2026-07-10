# Node.js 8 - Async and Promises

This folder teaches callbacks, promises, async/await, and parallel async work.

## Recommended order

1. `index.js` - quick overview of async ordering
2. `callbacks-promises.js` - callback style vs promise chains
3. `async-await.js` - `async`, `await`, `try/catch`, and `Promise.all`

## How to run

```powershell
cd "3-Node JS/8-async-promises"
node index.js
node callbacks-promises.js
node async-await.js
```

You can also use npm scripts:

```powershell
npm.cmd start
npm.cmd run callbacks
npm.cmd run await
```

## What to remember

- Async work finishes later.
- Callbacks are functions that run after work completes.
- Promises represent future success or failure.
- `.then()` handles success and `.catch()` handles failure.
- `async/await` makes promise code read top-to-bottom.
- `Promise.all()` runs independent promises in parallel.
