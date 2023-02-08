
const mysql = require("mysql");
  
let db_con  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Chesstitan87'
});
  
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("Connecté à la base de donnée");
    }
});
  
module.exports = db_con;
