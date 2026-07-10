/*
  Models
  ------
  A model describes the shape of data.

  In MongoDB/Mongoose, a model wraps a schema.
  In SQL/Prisma, a model often maps to a table.
*/

const userModelShape = {
  id: "number",
  name: "string",
  email: "string",
  createdAt: "Date",
};

function createUserModel(input) {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    createdAt: input.createdAt || new Date(),
  };
}

if (require.main === module) {
  console.log("User model shape:");
  console.table(userModelShape);
}

module.exports = { userModelShape, createUserModel };
