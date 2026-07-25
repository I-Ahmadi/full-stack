# Express JS

This project teaches Express step by step with small lesson files.

## Setup

From this folder, install dependencies once:

```powershell
npm install
```

PowerShell note: if `npm` is blocked by execution policy, use `npm.cmd`.

```powershell
npm.cmd install
```

## Learning Order

1. `1-fundamentals` - install, create an app, define routes, listen on a port
2. `2-routing` - route basics, HTTP methods, routers, params, query strings
3. `3-middleware` - built-in, custom, third-party middleware, execution order
4. `4-req-res` - request object, response object, status codes, cookies, headers
5. `5-controllers-mvc` - routes, controllers, services, MVC structure
6. `6-error-handling` - 404s, async errors, global error middleware, custom errors
7. `7-validation-security` - validation, security middleware, env config, auth basics
8. `8-static-templates` - static files, public folder, templates, view engines
9. `9-rest-api` - API routes, CRUD flow, testing endpoints
10. `10-database` - database connection, models, CRUD, repository pattern

## Running Lessons

Each file can be run directly:

```powershell
node "1-fundamentals/express-basics.js"
node "2-routing/route-basics.js"
node "9-rest-api/app.js"
```

Most examples start a small server on port `3000` unless you set `PORT`.

## What Express Adds To Node

- Friendly routing methods like `app.get()` and `app.post()`
- Middleware pipelines with `app.use()`
- Helpers like `res.json()`, `res.status()`, `res.redirect()`, and `res.cookie()`
- Routers for splitting features into separate files
- Error-handling middleware
- Static file and template rendering support
