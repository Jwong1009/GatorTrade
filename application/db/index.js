const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: '', // Insert your MySQL username here
    password: '', // Insert your MySQL password here
    database: 'gatortrade', 
    connectionLimit: 50,
    debug: false
});

module.exports = pool;
