const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Insert your MySQL username here
    password: 'student', // Insert your MySQL password here
    database: 'gatortrade', 
    connectionLimit: 50,
    debug: false
});

module.exports = pool;
