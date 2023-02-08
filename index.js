var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Chesstitan87"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE smanager2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});