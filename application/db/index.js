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
    user: 'root', // Insert your MySQL username here
    password: '12345', // Insert your MySQL password here
    database: 'GatorTrade', 
    connectionLimit: 50,
    debug: false
});

// module.exports = pool;

const promisePool = pool.promise();
module.exports = promisePool;
