/*
  Testing API Endpoints
  ---------------------
  Manual tools:
  - Browser for GET routes
  - Postman
  - Insomnia
  - VS Code REST Client
  - curl

  Automated tools:
  - node:test
  - jest
  - supertest
*/

console.log("Manual test commands:");
console.log("curl http://localhost:3000/api/tasks");
console.log('curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\\"title\\":\\"New task\\"}"');

console.log("\nExample supertest shape:");
console.log(`
const request = require("supertest");
const createApp = require("./app");

test("GET /api/tasks", async () => {
  const res = await request(createApp()).get("/api/tasks");
  expect(res.statusCode).toBe(200);
});
`);
