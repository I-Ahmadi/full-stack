/*
  Request and Response Objects

  Great question. Let's look at what these objects actually contain.

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    console.log(res);
});

server.listen(3000);

When a client sends a request like:

```http
GET /users?id=10 HTTP/1.1
Host: localhost:3000
User-Agent: Chrome
Accept: application/json
```

Node.js creates two JavaScript objects for you.

---

# What `req` (Request Object) holds

Think of `req` as **everything the client sent to your server**.

req = {
    method: "GET",
    url: "/users?id=10",
    headers: {
        host: "localhost:3000",
        "user-agent": "Chrome",
        accept: "application/json"
    },
    httpVersion: "1.1",
    socket: {...},

    on() {},
    pipe() {},
    destroy() {},
    ...
}

Important properties:

req.method
req.url
req.headers
{
    host: "localhost:3000",
    "user-agent": "Chrome",
    accept: "application/json"
}

---

If it is a POST request

```http
POST /login

{
   "email":"john@gmail.com",
   "password":"123456"
}

the body is **not** immediately available as a property in the core `http` module. 
Instead, you read it from the request stream:

let body = "";

req.on("data", chunk => {
    body += chunk;
});

req.on("end", () => {
    console.log(body);
});

Output:
{
    "email":"john@gmail.com",
    "password":"123456"
}

---

# What `res` (Response Object) holds
The response object starts mostly **empty**. It represents the response you're building to send back.

Initially it looks conceptually like:

res = {
    statusCode: 200,
    statusMessage: "OK",
    headers: {},

    setHeader(){},
    getHeader(){},
    write(){},
    end(){},
    writeHead(){},
    removeHeader(){},

    ...
}

You fill it before sending it.

Example:
res.statusCode = 201;

res.setHeader("Content-Type", "application/json");

res.end(
    JSON.stringify({
        message: "User created"
    })
);

Now the response being sent is roughly:

http
HTTP/1.1 201 Created

Content-Type: application/json

{
    "message":"User created"
}

# Think of it like a conversation

Imagine you order food at a restaurant.

### `req` is the customer's order

Customer:
"I want one burger and one Coke."
↓

req = {
    method: "POST",
    url: "/orders",
    body: {
        food: "Burger",
        drink: "Coke"
    }
}

The server (the kitchen) reads the order.

### `res` is the restaurant's reply

Server:
"Your order is ready."
↓

res = {
    statusCode: 200,
    body: {
        message: "Order placed successfully"
    }
}
*/
