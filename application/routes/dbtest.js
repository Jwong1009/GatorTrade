/**********************************************************
 * FILE: routes/dbtest.js
 * 
 * DESCRIPTION: Used to test whether the application is 
 * successfully connected to the database in db/index.js file.
 * Application's endpoints from this file will start with 
 * "/dbtest". Ex: "/dbtest" + "/getAllUsers" = "/dbtest/getAllUsers",
 * resulting in the URL being "http://localhost:3000/dbtest/getAllUsers"
**********************************************************/

const express = require('express');
const router = express.Router();
const db = require('../db');

// Testing DB to return all stored users from "users" table in DB.
router.get('/getAllUsers', (req, res, next) => {
    db.query('SELECT * FROM users;', (err, results, fields) => {
        console.log(results);
        res.send(results);
    });
});

module.exports = router;
