/*
  Simple HTTP Server and Routing
  ------------------------------
  Run this file:

    node simple-server.js

  This lesson uses only Node's built-in http module.
  No Express yet. That is intentional: learning the lower-level pieces makes
  frameworks easier to understand later.
*/

const http = require("http");

const users = [
  { id: 1, name: "Aisha", role: "admin" },
  { id: 2, name: "Omar", role: "student" },
];

function sendJson(res, statusCode, data) {
  const body = JSON.stringify(data, null, 2);

  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  });

  res.end(body);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      if (!body) return resolve({});

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("Invalid JSON request body"));
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  const url      = new URL(req.url, `http://${req.headers.host}`);
  const method   = req.method;
  const pathname = url.pathname;

  console.log(`${method} ${pathname}`);

  if (method === "GET" && pathname === "/") {
    return sendJson(res, 200, {
      message: "Welcome to the Node HTTP lesson",
      routes: ["GET /users", "GET /users/:id", "POST /users"],
    });
  }

  if (method === "GET" && pathname === "/users") {
    return sendJson(res, 200, {
      count: users.length,
      users,
    });
  }

  if (method === "GET" && pathname.startsWith("/users/")) {
    const id = Number(pathname.split("/")[2]);
    const user = users.find((item) => item.id === id);

    if (!user) {
      return sendJson(res, 404, { error: "User not found" });
    }

    return sendJson(res, 200, { user });
  }

  if (method === "POST" && pathname === "/users") {
    try {
      const body = await readJsonBody(req);
      const user = {
        id: users.length + 1,
        name: body.name || "New user",
        role: body.role || "student",
      };

      users.push(user);
      return sendJson(res, 201, { message: "User created", user });
    } catch (error) {
      return sendJson(res, 400, { error: error.message });
    }
  }

  sendJson(res, 404, {
    error: "Route not found",
    method,
    pathname,
  });
});

function makeRequest(port, options, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        ...options,
      },
      (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          resolve({
            statusCode: res.statusCode,
            body: data,
          });
        });
      }
    );

    req.on("error", reject);

    if (body) {
      req.write(body);
    }

    req.end();
  });
}

async function runSelfTest(port) {
  const listUsers = await makeRequest(port, { path: "/users", method: "GET" });
  console.log("\nGET /users");
  console.log(listUsers.statusCode, listUsers.body);

  const oneUser = await makeRequest(port, { path: "/users/1", method: "GET" });
  console.log("\nGET /users/1");
  console.log(oneUser.statusCode, oneUser.body);

  const newUserBody = JSON.stringify({ name: "Sara", role: "editor" });
  const createdUser = await makeRequest(
    port,
    {
      path: "/users",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(newUserBody),
      },
    },
    newUserBody
  );

  console.log("\nPOST /users");
  console.log(createdUser.statusCode, createdUser.body);
}

server.listen(0, "127.0.0.1", async () => {
  const { port } = server.address();
  console.log(`Server listening on http://127.0.0.1:${port}`);

  try {
    await runSelfTest(port);
  } finally {
    server.close(() => {
      console.log("\nServer closed after self-test.");
    });
  }
});

/*
  Key ideas
  ---------
  - req.method tells you GET, POST, PUT, DELETE, etc.
  - req.url contains the path and query string.
  - new URL(req.url, base) parses path and query values.
  - res.writeHead sets status and headers.
  - res.end sends the response and finishes the request.
*/
