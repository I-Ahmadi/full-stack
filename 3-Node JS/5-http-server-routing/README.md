# Node.js 5 - HTTP Server and Routing

This folder teaches how Node can serve HTTP requests without Express.

## Recommended order

1. `simple-server.js` - basic server, routes, JSON responses, request bodies
2. `url-query.js` - parse paths and query strings with `URL`
3. `status-headers.js` - status codes, response headers, and redirects

## How to run

```powershell
cd "3-Node JS/5-http-server-routing"
node simple-server.js
node url-query.js
node status-headers.js
```

Each server starts on a temporary port, sends itself a test request, prints the
result, then closes.

## What to remember

- `http.createServer()` creates a server.
- `req.method` tells you the HTTP method.
- `req.url` contains the path and query string.
- `new URL(req.url, base)` parses routes and query params.
- `res.writeHead()` sets status and headers.
- `res.end()` sends the response.
