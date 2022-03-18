const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Insert your MySQL username here
    password: 'Team05Guest!', // Insert your MySQL password here
    database: 'GatorTrade', 
    connectionLimit: 50,
    debug: true
});

pool.query("SELECT * FROM Items",(err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    // rows fetch
    console.log(data);
});

module.exports = pool;
