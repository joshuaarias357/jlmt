require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: process.env.MYSQL_TEST_USER,
    password: process.env.MYSQL_TEST_PASS,
    database: process.env.MYSQL_TEST_DB,
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
