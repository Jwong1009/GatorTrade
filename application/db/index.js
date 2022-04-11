/**********************************************************
 * FILE: db/index.js
 * 
 * DESCRIPTION: Connects to MySQL through user's MySQL 
 * credentials (username, password, etc.). User and Password 
 * may differ from user to user and when connecting through 
 * AWS server.
**********************************************************/

const mysql = require('mysql2');

// Connects to MySQL databse:
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL Username here
    password: 'student', // Replace with your MySQL Password here
    database: 'GatorTrade', 
    connectionLimit: 50,
    debug: false
});

module.exports = pool;