var mysql = require("mysql");
// Setting up mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Rootbeer1",
  database: "eatdaburger_db"
});

// Make connection.
connection.connect((err) => {
  if (err) {                              
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;