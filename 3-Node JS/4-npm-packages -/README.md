# Node.js 4 - npm Packages

This folder teaches npm, `package.json`, dependency types, semantic versions, and npm scripts.

## Recommended order

1. `packages-mgt.js` - npm commands, local/global packages, dependencies, devDependencies
2. `package-json.js` - how `package.json` works
3. `npm-scripts.js` - how project scripts work
4. `package.json` - the runnable project config used by these examples

## How to run

Open a terminal in this folder:

```powershell
cd "3-Node JS/4-npm-packages"
```

Run files directly:

```powershell
node packages-mgt.js
node package-json.js
node npm-scripts.js
```

Run through npm scripts:

```powershell
npm start
npm run packages
npm run lesson
npm run scripts
npm test
```

If PowerShell says `npm.ps1 cannot be loaded because running scripts is disabled`,
use `npm.cmd` instead:

```powershell
npm.cmd start
npm.cmd run scripts
```

## Useful npm commands

```powershell
npm init
npm init -y
npm install express
npm install -D nodemon
npm uninstall express
npm list
npm outdated
npm update
```

## What to remember

- `npm` installs and manages packages.
- `package.json` stores project metadata, scripts, and dependency ranges.
- `package-lock.json` stores exact installed versions.
- `dependencies` are needed in production.
- `devDependencies` are used only for development tools.
- `npm start` runs the `start` script.
- Most other scripts are run with `npm run script-name`.
