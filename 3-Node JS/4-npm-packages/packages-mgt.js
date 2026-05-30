/*

* The first thing we do when we start a new project is to install npm
- npm init
    - package name: node-form
    - version: just hit enter
    - description: Learning node.js
    - entry point: just hit enter
    - test command: just hit enter
    - git repository: just hit enter
    - keywords: just hit enter
    - author: Ismail Ahmadi
    - license: just hit enter
- npm init -y

* Types of packages
1. Local packages - Stored in node_modules/
    - Installed inside a project
    - Used only by that project
    - Added to package.json file

    Exampe:
    - npm install express

2. Global packages
    - Installed system-wide
    - Used from the command line

    Example:
    - npm install -g nodemon

* Based on usage they are classified as:
1. Dependencies 
    - Required for the application to run
        - Used in production
        - If removed, the app may crash
        - Installed with:
            - npm install express

            Saved in package.json file:
            "dependencies": {
                "express": '4.18.2'
                "mongoose": '8.0.0'
            }

2. DevDependencies
    - Used only during development
        - Not needed in production
        - Helps with testing, compiling, and formatting
        - Installed with:
            - npm install -D nodemon

            Saved in package.json file:
            "devDependencies": {
                "nodemon": '4.18.2'
                "typescript": '8.0.0'
            }

*********************************

* Installing a specific version of a package
- npm install express@4.17.1

* Installing multiple packages at once
- npm install express mongoose cors

* Uninstalling a package
- npm uninstall express

* Installing latest version of a package
- npm install express@latest

* How to check outdated packages
- npm outdated

* Updating packages
- npm update express

* Viewing installed packages
- npm list

*/

/*

* Packages:

| Category   | Package                | Purpose               | Install                    |
| ---------- | ---------------------- | --------------------- | -------------------------- |
| Core       | **express**            | Web framework / APIs  | `npm i express`            |
| Config     | **dotenv**             | Environment variables | `npm i dotenv`             |
| Security   | **cors**               | Cross-origin requests | `npm i cors`               |
| Dev        | **nodemon**            | Auto-restart server   | `npm i -D nodemon`         |
| Auth       | **jsonwebtoken**       | JWT authentication    | `npm i jsonwebtoken`       |
| Auth       | **bcrypt**             | Password hashing      | `npm i bcrypt`             |
| Security   | **helmet**             | Secure HTTP headers   | `npm i helmet`             |
| Security   | **express-rate-limit** | Prevent brute force   | `npm i express-rate-limit` |
| Validation | **joi / zod**          | Request validation    | `npm i joi`                |
| Validation | **express-validator**  | Middleware validation | `npm i express-validator`  |
| Database   | **mongoose**           | MongoDB ODM           | `npm i mongoose`           |
| ORM        | **prisma**             | Modern ORM            | `npm i prisma`             |
| Upload     | **multer**             | File uploads          | `npm i multer`             |
| Media      | **cloudinary**         | Cloud storage         | `npm i cloudinary`         |
| Email      | **nodemailer**         | Send emails           | `npm i nodemailer`         |
| Queue      | **bullmq**             | Background jobs       | `npm i bullmq`             |
| Logs       | **winston**            | Logging               | `npm i winston`            |
| Logs       | **morgan**             | HTTP request logs     | `npm i morgan`             |
| HTTP       | **axios**              | API calls             | `npm i axios`              |
| Utility    | **uuid**               | Unique IDs            | `npm i uuid`               |
| Date       | **dayjs**              | Date & time           | `npm i dayjs`              |
| Test       | **jest**               | Testing framework     | `npm i -D jest`            |
| Test       | **supertest**          | API testing           | `npm i -D supertest`       |
| Quality    | **eslint**             | Linting               | `npm i -D eslint`          |
| Quality    | **prettier**           | Formatting            | `npm i -D prettier`        |
| TypeScript | **typescript**         | TS support            | `npm i -D typescript`      |
| TypeScript | **tsx**                | Run TS files          | `npm i -D tsx`             |
| Types      | **@types/express**     | Express types         | `npm i -D @types/express`  |
| Types      | **@types/node**        | Node types            | `npm i -D @types/node`     |

*/
