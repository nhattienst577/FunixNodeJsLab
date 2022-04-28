const mysql = require("mysql2");

//connection pool - vung ket noi
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "wwwwgunner",
});

module.exports = pool.promise();
