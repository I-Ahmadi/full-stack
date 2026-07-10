/*
  Database Connection
  -------------------
  Express does not include a database.
  You choose a database and driver/ORM:
  - MongoDB with mongoose
  - PostgreSQL/MySQL with prisma, knex, sequelize, or native drivers

  Keep database connection code separate from route files.
*/

async function connectDatabase() {
  const databaseUrl = process.env.DATABASE_URL || "memory://lesson-db";

  console.log(`Connecting to ${databaseUrl}`);

  return {
    url: databaseUrl,
    connected: true,
  };
}

if (require.main === module) {
  connectDatabase().then((connection) => console.log(connection));
}

module.exports = connectDatabase;
