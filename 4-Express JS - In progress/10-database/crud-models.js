/*
  CRUD With Models
  ----------------
  This in-memory example acts like a tiny database table.
*/

const { createUserModel } = require("./models");

const users = [];

const userModel = {
  create(input) {
    const user = createUserModel({
      id: users.length + 1,
      ...input,
    });

    users.push(user);
    return user;
  },

  findMany() {
    return users;
  },

  findById(id) {
    return users.find((user) => user.id === Number(id)) || null;
  },
};

if (require.main === module) {
  userModel.create({ name: "Aisha", email: "aisha@example.com" });
  console.log(userModel.findMany());
}

module.exports = userModel;
