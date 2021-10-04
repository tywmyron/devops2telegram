const mysql = require("mysql");
require("dotenv").config();

const properties = {
    host: `${process.env.DBHOST}`,
    port: process.env.DBPORT,
    user: `${process.env.DBUSER}`,
    password: `${process.env.DBPASS}`,
    database: `${process.env.DBNAME}`,
};

var connection = mysql.createConnection(properties)

connection.connect((error) => {
    if (error) {
        console.log(`Couldn't connect to the MySQL Server. Error: ${error}`)
    }
    else {
        console.log("Connected to MySQL successfully!")
    }
});

// Now we export the connection object so it can be used elsewhere
module.exports = {
    connection 
};

