/*
The Built-in URL Module
The URL module provides utilities for URL resolution and parsing.

It can be used to split up a web address into readable parts, construct URLs, 
and handle different URL components.
*/

// Getting Started
// To include the URL module, use the require() method.

// Using the legacy API
const url = require('url');

// Using the modern URL class (WHATWG API)
const { URL } = require('url');
let url       = require('url');

// Parse an address with the url.parse() method, and it will return a URL object 
// with each part of the address as properties:

// Example:
// Split a web address into readable parts:

let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let q = url.parse(adr, true);

console.log(q.host); // localhost:8080
console.log(q.pathname); // /default
console.log(q.search); // ?year=2017&month=february

let qdata = q.query;
console.log(qdata.month); // february

/*
URL Parsing and Formatting and URL Object Properties
When you parse a URL, you get a URL object with the following properties:

- href: The full URL that was parsed
- protocol: The protocol scheme (e.g., 'http:')
- host: The full host portion (e.g., 'example.com:8080')
- hostname: The hostname portion (e.g., 'example.com')
- port: The port number if specified
- pathname: The path section of the URL
- search: The query string including the leading ?
- query: Either the query string without the ?, or a parsed query object
- hash: The fragment identifier including the #
*/

// Legacy API vs WHATWG URL API

// Example
const { URL } = require('url');

// Using the WHATWG URL API (recommended for new code)
const myURL = new URL('https://example.org:8080/p/a/t/h?query=string#hash');
console.log(myURL.hostname); // 'example.org'
console.log(myURL.pathname); // '/p/a/t/h'
console.log(myURL.searchParams.get('query')); // 'string'

// Using the legacy API
const parsedUrl = require('url').parse('https://example.org:8080/p/a/t/h?query=string#hash');
console.log(parsedUrl.host); // 'example.org:8080'
console.log(parsedUrl.query); // 'query=string'

// URLSearchParams API
// The URLSearchParams API provides utility methods to work with the query string of a URL:

// Example
const { URL, URLSearchParams } = require('url');
const myURL  = new URL('https://example.com/?name=Kai&age=30');
const params = new URLSearchParams(myURL.search);

// Get a parameter
console.log(params.get('name'));

// Add a parameter
params.append('city', 'Stavanger');

// Delete a parameter
params.delete('age');

// Convert to string
console.log(params.toString());

// Node.js File Server
// Create two html files and save them in the same folder as your node.js files.

/*
summer.html

<!DOCTYPE html>
<html>
<body>
<h1>Summer</h1>
<p>I love the sun!</p>
</body>
</html>
winter.html

<!DOCTYPE html>
<html>
<body>
<h1>Winter</h1>
<p>I love the snow!</p>
</body>
</html>
*/

// Create a Node.js file that opens the requested file and returns the content to the client. 
// If anything goes wrong, throw a 404 error:

// demo_fileserver.js:

let http = require('http');
let url  = require('url');
let fs   = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

/*
http://localhost:8080/summer.html

Will produce this result:
<h1>Summer</h1>
<p>I love the sun!</p>

http://localhost:8080/winter.html

Will produce this result:
<h1>Winter</h1>
<p>I love the snow!</p>
*/
