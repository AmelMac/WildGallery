require('dotenv').config();
const mysql = require("mysql2");
const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME} = process.env

const connection = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD
});

module.exports = {
    db: connection
}