const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getAllUsers', (req, res, next) => {
    db.query('SELECT * FROM users;', (err, results, fields) => {
        console.log(results);
        res.send(results);
    });
});

module.exports = router;
