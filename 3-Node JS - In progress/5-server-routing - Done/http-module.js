/*
The Built-in HTTP Module
Node.js includes a powerful built-in HTTP module that enables you to create HTTP servers and make HTTP requests.

Key Features
- Create HTTP servers to handle requests and send responses
- Make HTTP requests to other servers
- Handle different HTTP methods (GET, POST, PUT, DELETE, etc.)
- Work with request and response headers
- Handle streaming data for large payloads
*/

// Using CommonJS require (Node.js default)
const http = require('http');

// Or using ES modules (Node.js 14+ with "type": "module" in package.json)
// import http from 'http';

// Creating an HTTP Server:
// The HTTP module's createServer() method creates an HTTP server that listens for requests on a specified port 
// and executes a callback function for each request.

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {
        'content-type': 'text/plain',
    });

    // Send the response body as 'Hello, World!'
    return res.end('Hello, World!\n');
});

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/*
Understanding the Code:
1. http.createServer() - Creates a new HTTP server instance
2. The callback function is executed for each request with two parameters:
    - req - The request object (http.IncomingMessage)
    - res - The response object (http.ServerResponse)
3. res.writeHead() - Sets the response status code and headers
4. res.end() - Sends the response and ends the connection
5. server.listen() - Starts the server on the specified port
*/

// Working with HTTP Headers
// HTTP headers let you send additional information with your response.
// The res.writeHead() method is used to set the status code and response headers.

const server = http.createServer((req, res) => {
    // Set status code and multiple headers
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Customer-Header': 'This is a custom header',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Set-Cookie': 'sessionId=abc123; HttpOnly; Secure',
    });

    return res.end('<h1>Hello, World!</h1><p>This is a response with custom headers.</p>');
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

/*
Common  HTTP Status Codes:
Code	Message	              Description
200	    OK	                  Standard response for successful HTTP requests
201	    Created	              Request has been fulfilled and new resource created
301	    Moved Permanently	  Resource has been moved to a new URL
400	    Bad Request	Server    cannot process the request due to client error
401	    Unauthorized	      Authentication is required
403	    Forbidden	          Server refuses to authorize the request
404	    Not Found	          Requested resource could not be found
500	    Internal Server Error Unexpected condition was encountered
*/

// Reading Request Headers
// You can access request headers using the req.headers object:

const server = http.createServer((req, res) => {
    // Logs all request header to the console
    console.log('Request Headers:', req.headers);

    // Get specific headers (case-insensitive)
    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(`User-Agent ${userAgent} \nAccept-Language: ${acceptLanguage}`);
});

server.listen(3000);

// Accessing the Request URL
// The req.url property contains the URL string that was requested, including any query parameters.

const server = http.createServer((req, res) => {
    // Get the URL and HTTP method
    const { url, method } = req;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(`You made a ${method} request to ${url}`);
});

server.listen(3000);

// Parsing URLs with the URL Module
// The url module provides utilities for URL resolution and parsing.
// It can parse a URL string into a URL object with properties for each part of the URL.

const url = require('url');

const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    console.log('Parsed URL:', parsedUrl);

    /*
        You'll get an object similar to this:

        Url {
            protocol: null,
            slashes: null,
            auth: null,
            host: null,
            port: null,
            hostname: null,
            hash: null,

            search: '?id=10&name=Ismail&active=true',

            query: {
                id: '10',
                name: 'Ismail',
                active: 'true'
            },

            pathname: '/users/profile',

            path: '/users/profile?id=10&name=Ismail&active=true',
            href: '/users/profile?id=10&name=Ismail&active=true'
        }
    */

    // Get different parts of the URL
    const pathname = parsedUrl.pathname; // The path without query string
    const query    = parsedUrl.query; // The query string as an object

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
        pathname: pathname,
        query: query,
        fullUrl: req.url
    }));
});

server.listen(3000);

// Handling Different HTTP Methods
// RESTful APIs commonly use different HTTP methods (GET, POST, PUT, DELETE, etc.) to perform different operations on resources.
// Here's how to handle different HTTP methods in a Node.js HTTP server:

const http = require('http');
const { URL } = require('url');

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
];

const server = http.createServer((req, res) => {
    const method = req.method;
    const url    = req.url;

    // Set CORS headers (for development)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    
    // Route: GET /todos
    if (method === 'GET' && url === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos))
    }

    // Route: DELETE /todos/:id
    else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
        const id = parseInt(pathname.split('/')[2]);
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Todo not found' }));
        } else {
            todos = todos.filter(t => t.id !== id);
            res.writeHead(204);
            res.end();
        }
    }

    // 404 Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
