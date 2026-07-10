/*
  npm Package Management
  ----------------------
  Run this file:

    node packages-mgt.js

  npm means Node Package Manager.

  npm helps you:
  - Create a package.json file
  - Install packages
  - Remove packages
  - Update packages
  - Run project scripts
  - Share your own packages
*/

console.log("1. What is npm?");
console.log("npm is the package manager that comes with Node.js.\n");

/*
  Starting a project
  ------------------
  These commands create package.json:

    npm init
    npm init -y

  npm init asks questions.
  npm init -y accepts default answers.
*/

console.log("2. Create package.json:");
console.log("npm init");
console.log("npm init -y\n");

/*
  Local packages vs global packages
  ---------------------------------
  Local packages are installed inside a project.

    npm install express

  They go into:
  - node_modules/
  - package.json dependencies
  - package-lock.json exact install tree

  Global packages are installed for command-line use across your computer.

    npm install -g nodemon

  Use global installs carefully. Many modern tools can be run locally with
  npm scripts or with npx.
*/

console.log("3. Local package example:");
console.log("npm install express");

console.log("\n4. Global package example:");
console.log("npm install -g nodemon\n");

/*
  dependencies vs devDependencies
  -------------------------------
  dependencies:
  - Needed when the app runs in production
  - Example: express, mongoose, cors, dotenv

  devDependencies:
  - Needed while building or developing
  - Example: nodemon, jest, eslint, prettier, typescript
*/

const dependencyExamples = [
  {
    type: "dependency",
    command: "npm install express",
    usedFor: "Code needed by the running app",
  },
  {
    type: "devDependency",
    command: "npm install --save-dev nodemon",
    usedFor: "Tools needed only while developing",
  },
];

console.log("5. Dependency types:");
console.table(dependencyExamples);

/*
  Common package commands
*/

const commands = [
  ["Install one package", "npm install express"],
  ["Install many packages", "npm install express mongoose cors"],
  ["Install a dev package", "npm install -D nodemon"],
  ["Install a version", "npm install express@4.18.2"],
  ["Install latest", "npm install express@latest"],
  ["Remove a package", "npm uninstall express"],
  ["Show installed packages", "npm list"],
  ["Show outdated packages", "npm outdated"],
  ["Update safe versions", "npm update"],
  ["Run a package once", "npx cowsay hello"],
];

console.log("6. Common npm commands:");
for (const [label, command] of commands) {
  console.log(`${label}: ${command}`);
}

/*
  package-lock.json
  -----------------
  package.json says what versions your project allows.
  package-lock.json records the exact versions npm installed.

  Commit package-lock.json for applications. It helps everyone install the same
  dependency tree.
*/

/*
  node_modules
  ------------
  node_modules contains downloaded package code.

  Usually:
  - Do not edit node_modules manually.
  - Do not commit node_modules to git.
  - Recreate it with npm install.
*/

/*
  Popular backend packages
*/

const popularPackages = [
  ["express", "Web framework for APIs"],
  ["dotenv", "Load environment variables"],
  ["cors", "Allow cross-origin requests"],
  ["mongoose", "MongoDB object modeling"],
  ["jsonwebtoken", "JWT authentication"],
  ["bcrypt", "Password hashing"],
  ["helmet", "Security headers"],
  ["multer", "File uploads"],
  ["morgan", "HTTP request logging"],
  ["axios", "Call external APIs"],
  ["zod", "Validate data"],
  ["jest", "Testing"],
  ["eslint", "Linting"],
  ["prettier", "Formatting"],
  ["typescript", "TypeScript compiler"],
];

console.log("\n7. Popular packages:");
console.table(
  popularPackages.map(([name, purpose]) => ({
    package: name,
    purpose,
  }))
);

console.log("Done. Open README.md for the recommended study order.");
