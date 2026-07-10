/*
  URL and Query Parsing
  ---------------------
  Run this file:

    node url-query.js

  Query strings are the part after ? in a URL.

  Example:

    /search?q=node&page=2

  q and page are query parameters.
*/

const http = require("http");

const products = [
  { id: 1, name: "Keyboard", category: "tools" },
  { id: 2, name: "Notebook", category: "study" },
  { id: 3, name: "Monitor", category: "tools" },
];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname !== "/products") {
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Try /products" }));
  }

  const category = url.searchParams.get("category");
  const limit = Number(url.searchParams.get("limit") || products.length);

  const filtered = products
    .filter((product) => !category || product.category === category)
    .slice(0, limit);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(
      {
        pathname: url.pathname,
        category,
        limit,
        count: filtered.length,
        products: filtered,
      },
      null,
      2
    )
  );
});

function requestPath(port, path) {
  return new Promise((resolve, reject) => {
    http.get({ hostname: "127.0.0.1", port, path }, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => resolve(body));
    }).on("error", reject);
  });
}

server.listen(0, "127.0.0.1", async () => {
  const { port } = server.address();
  const body = await requestPath(port, "/products?category=tools&limit=1");

  console.log(body);
  server.close();
});

/*
  Useful URL APIs
  ---------------
  url.pathname                   -> "/products"
  url.search                     -> "?category=tools"
  url.searchParams.get("limit")  -> "1"
  url.searchParams.has("page")   -> true/false
*/
