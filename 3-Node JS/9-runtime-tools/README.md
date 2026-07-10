# Node.js 9 - Runtime Tools

This folder teaches runtime utilities that are useful for real Node apps.

## Recommended order

1. `cli-args.js` - read command-line arguments
2. `env-variables.js` - read configuration from `process.env`
3. `debugging.js` - console tools, stack traces, and inspector
4. `child-process.js` - run another program from Node
5. `worker-threads.js` - run CPU-heavy JavaScript on a worker thread

## How to run

```powershell
cd "3-Node JS/9-runtime-tools"
node cli-args.js --name Aisha --mode dev
node env-variables.js
node debugging.js
node child-process.js
node worker-threads.js
```

PowerShell environment variable example:

```powershell
$env:APP_MODE="production"; $env:PORT="5000"; node env-variables.js
```

## What to remember

- `process.argv` contains CLI arguments.
- `process.env` contains environment variables.
- `node --inspect file.js` enables debugger attachment.
- `child_process` runs other commands.
- `worker_threads` helps with CPU-heavy JavaScript.
