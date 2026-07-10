/*
  CRUD Flow
  ---------
  CRUD means:
  - Create
  - Read
  - Update
  - Delete

  REST mapping:
  - Create -> POST /resources
  - Read   -> GET /resources or GET /resources/:id
  - Update -> PATCH /resources/:id or PUT /resources/:id
  - Delete -> DELETE /resources/:id
*/

const flow = [
  { action: "Create", method: "POST", path: "/api/tasks", success: 201 },
  { action: "Read all", method: "GET", path: "/api/tasks", success: 200 },
  { action: "Read one", method: "GET", path: "/api/tasks/:id", success: 200 },
  { action: "Update", method: "PATCH", path: "/api/tasks/:id", success: 200 },
  { action: "Delete", method: "DELETE", path: "/api/tasks/:id", success: 204 },
];

console.table(flow);
