require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "pelit-app",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "pelit-test",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: "postgres",
    logging: "config",
  },
};