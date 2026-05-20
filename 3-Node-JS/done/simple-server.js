const http = require('http');
const url = require("url");

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const method   = req.method;
    const path     = parseUrl.pathname;

    // Get All Users
    if (method === "GET" && path === "/users") {
        console.log("Fetching all users");
    }
    // Get User by ID
    if (method === "GET" && path.startsWith("/users/")) {
        console.log("Fetching user by ID");
    }
    // Create a New User
    if (method === "POST" && path === "/users") {
        console.log("Creating a new user");
    }
    // Update User by ID
    if (method === "PUT" && path.startsWith("/users/")) {
        console.log("Updating user by ID");
    }
    // Delete User by ID
    if (method === "DELETE" && path.startsWith("/users/")) {
        console.log("Deleting user by ID");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

/*

Request Object:

1. Core Identity
- req.method      - HTTP methods: GET, POST, PUT and DELETE
- req.url         - Full URL with query string
- req.path        - URL path only
- req.originalUrl - Original request URL
- req.protocol    - http / https
- req.secure      - true if HTTPS

2. Parameters & Input Data
- req.body   - JSON / from data sent by client
- req.params - /users/:id -> { id } 
- req.query  - ?page=1&limit=10

3. Headers & Metadata
- req.headers                   - All headers
- req.header("authorization")
- req.get('content-type')

4. Client & Netowrk Info
- req.ip       - Client IP
- req.ips      - Proxy IPs (if trust proxy enabled)
- req.hostname - Host name
- req.socket   - Low-level socket

5. Cookes & Sessions
- req.cookies       - Parsed cookes
- req.signedCookies - Signed cookies
- req.session       - Session date (if session middleware)

6. Routing & App Context
- req.baseUrl - Mounted route path
- req.route   - Current route info
- req.app     - Express app instance

7. Custom Properties
- req.user        - Authenticated user
- req.permissions - Permission context
- req.requestId   - Trace ID

----------------------------------

1. Sending Data
- JSON
res.json({ message: "Task created successfully!" })

- Text
res.send("Hello from the backend!")

2. Status Codes
res.status(200)
res.status(201)
res.status(400)
res.status(401)
res.status(403)
res.status(404)
res.status(500)

3. Headers
res.set("Authorization", "Bearer token")
res.setHeader("X-Request-Id", id)
res.get("Content-Type")

5. File & Download
res.sendFile(path)
res.download(path)

* Production Response Pattern
res.status(200).json({
    success: true,
    payload: data,
    message: "Tasks fetched successfully!"
});

* Summary
res.statsu()   - HTTP code
res.json()     - Send JSON
res.send()     - Send any data
res.set        - Headers
res.cookie()   - Cookies
res.redirect() - Redirect

*/
