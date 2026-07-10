/*
  Status Codes and Headers
  ------------------------
  Run this file:

    node status-headers.js

  Status codes describe what happened.
  Headers describe metadata about the response.
*/

const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/created") {
    res.writeHead(201, {
      "Content-Type": "application/json",
      "X-Lesson": "status-headers",
    });

    return res.end(JSON.stringify({ message: "Resource created" }));
  }

  if (url.pathname === "/redirect") {
    res.writeHead(302, {
      Location: "/created",
    });

    return res.end();
  }

  if (url.pathname === "/plain") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("Plain text response");
  }

  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ error: "Not found" }));
});

function requestPath(port, path) {
  return new Promise((resolve, reject) => {
    http.get(
      {
        hostname: "127.0.0.1",
        port,
        path,
      },
      (res) => {
        let body = "";

        res.on("data", (chunk) => {
          body += chunk;
        });

        res.on("end", () => {
          resolve({
            path,
            statusCode: res.statusCode,
            headers: res.headers,
            body,
          });
        });
      }
    ).on("error", reject);
  });
}

server.listen(0, "127.0.0.1", async () => {
  const { port } = server.address();

  for (const path of ["/created", "/plain", "/redirect", "/missing"]) {
    const response = await requestPath(port, path);
    console.log(`\n${path}`);
    console.log("Status:", response.statusCode);
    console.log("Content-Type:", response.headers["content-type"] || "none");
    console.log("Location:", response.headers.location || "none");
    console.log("Body:", response.body || "(empty)");
  }

  server.close();
});

/*
  Common status codes
  -------------------
  200 OK
  201 Created
  204 No Content
  301 Moved Permanently
  302 Found
  400 Bad Request
  401 Unauthorized
  403 Forbidden
  404 Not Found
  500 Internal Server Error
*/
