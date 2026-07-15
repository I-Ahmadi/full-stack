/*
  Simple HTTP Server and Routing
  ------------------------------
  Run this file:

    node simple-server.js

  This lesson uses only Node's built-in http module.
  No Express yet. That is intentional: learning the lower-level pieces makes
  frameworks easier to understand later.
*/

// Making Node JS http server

// First Step
const http = require('http');

const users = [
  {
    id: 1,
    firstName: "Aisha",
    lastName: "Khan",
    email: "aisha.khan@example.com",
    phone: "+1-555-1001",
    age: 28,
    gender: "Female",
    role: "Admin",
    department: "Engineering",
    city: "New York",
    country: "USA",
    isActive: true,
    createdAt: "2026-01-15T09:30:00Z"
  },
  {
    id: 2,
    firstName: "Omar",
    lastName: "Ali",
    email: "omar.ali@example.com",
    phone: "+1-555-1002",
    age: 24,
    gender: "Male",
    role: "Student",
    department: "Computer Science",
    city: "Toronto",
    country: "Canada",
    isActive: true,
    createdAt: "2026-02-10T14:20:00Z"
  },
  {
    id: 3,
    firstName: "Fatima",
    lastName: "Noor",
    email: "fatima.noor@example.com",
    phone: "+1-555-1003",
    age: 31,
    gender: "Female",
    role: "Manager",
    department: "Operations",
    city: "London",
    country: "UK",
    isActive: false,
    createdAt: "2026-03-05T11:45:00Z"
  },
  {
    id: 4,
    firstName: "Ahmad",
    lastName: "Rahimi",
    email: "ahmad.rahimi@example.com",
    phone: "+1-555-1004",
    age: 29,
    gender: "Male",
    role: "Developer",
    department: "Engineering",
    city: "Kabul",
    country: "Afghanistan",
    isActive: true,
    createdAt: "2026-01-28T08:15:00Z"
  },
  {
    id: 5,
    firstName: "Sara",
    lastName: "Ahmadi",
    email: "sara.ahmadi@example.com",
    phone: "+1-555-1005",
    age: 26,
    gender: "Female",
    role: "Designer",
    department: "UI/UX",
    city: "Berlin",
    country: "Germany",
    isActive: true,
    createdAt: "2026-04-12T16:30:00Z"
  }
];

// Second Step
const server = http.createServer((req, res) => {
  console.log('Request object: ', req);
  console.log('Response object: ', res);

  if (req.method === 'GET' && req.url === '/') { 
    res.writeHead(200, {
      "content-type": "text/plain"
    })

    return res.end("Welcome to Node JS!");
  }

  // Get all users
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    return res.end(JSON.stringify({
      message: "Users fetched successfully!",
      data: users,
    }, null, 2));
  };

  // Get user by ID
  if (req.method === "GET" && req.url.startsWith("/users/")) {
    const userId = Number(req.url.split("/")[2]);

    if (isNaN(userId)) {
      res.writeHead(400, {
        "Content-Type": "application/json",
      });

      return res.end(JSON.stringify({
        message: "Invalid user ID",
        data: null,
      }, null, 2));
    }

    const user = users.find((user) => user.id === userId);

    if (!user) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      return res.end(JSON.stringify({
        message: "User not found",
        data: null,
      }, null, 2));
    }

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    return res.end(JSON.stringify({
      message: "User fetched successfully!",
      data: user,
    }, null, 2));
  };

  // Create user
  if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const payload = JSON.parse(body);
      const user    = users.find((user) => user.email === payload.email);

      if (user) {
        res.writeHead(400, {
          "Content-Type": "application/json",
        });

        return res.end(JSON.stringify({
          message: "User with this email already exists",
          data: null,
        }, null, 2));
      }

      const newUser = {
        id: users.length + 1,
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        age: payload.age,
        gender: payload.gender,
        role: payload.role,
        department: payload.department,
        city: payload.city,
        country: payload.country,
        isActive: payload.isActive,
        createdAt: new Date()
      };

      users.push(newUser);

      res.writeHead(201, {
        "Content-Type": "application/json",
      });

      return res.end(JSON.stringify({
        message: "User created successfully!",
        data: newUser,
      }, null, 2));
    });
  };

  // Update user
  if (req.method === "PUT" && req.url.startsWith("/users/")) {
    const id = parseInt(req.url.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const updatedData = JSON.parse(body);
      const userIndex   = users.findIndex((user) => user.id === id);

      if (userIndex === -1) {
        res.writeHead(404, {
          "Content-Type": "application/json",
        });

        return res.end(JSON.stringify({
          message: "User not found"
        }));
      }

      users[userIndex] = {
        ...users[userIndex],
        ...updatedData
      };

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      return res.end(JSON.stringify({
        message: "User updated successfully!",
        data: users[userIndex]
      }, null, 2));
    });
  };

  // Delete user
  if (req.method === "DELETE" && req.url.startsWith("/users/")) {
    const id        = parseInt(req.url.split("/")[2]);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      res.writeHead(404, {
        "Content-Type": "application/json",
      });

      return res.end(JSON.stringify({
        message: "User not found"
      }));
    }

    const deletedUser = users.splice(userIndex, 1);

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    return res.end(JSON.stringify({
      message: "User deleted successfully!",
      data: deletedUser[0]
    }, null, 2));
  };
});

// Third Step
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is listening on http://127.0.0.1:3000')
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
