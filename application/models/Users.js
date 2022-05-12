/**********************************************************
 * FILE: models/Users.js
 * 
 * DESCRIPTION: Handles any db functionality related to Users.
 * 
 * CREATED BY: Faisal
**********************************************************/
var db = require('../db');
var bcrypt = require('bcryptjs');
const UserModel = {};

UserModel.create = (password, email, firstname, lastname) => {
    return bcrypt.hash(password, 15)
    .then((hashedPassword) => {
        let baseSQL = "INSERT INTO GatorTrade.Users (email, password, firstname, lastname) VALUES (?,?,?,?);";
        return db.execute(baseSQL, [email, hashedPassword, firstname, lastname])
    })
    .then(([results, fields]) => {
        if(results && results.affectedRows) {
            return Promise.resolve(results.insertId);
        } else {
            // User was not created
            return Promise.resolve(-1);
        }
    })
    .catch((err) => Promise.reject(err));
}

UserModel.usernameExists = (username) => {
    return db.execute("SELECT * FROM GatorTrade.Users WHERE username=?", [username])
    .then(([results, fields]) => {
        return Promise.resolve(!(results && results.length == 0));
    })
    .catch((err) => Promise.reject(err));
}

UserModel.emailExists = (email) => {
    return db.execute("SELECT * FROM GatorTrade.Users WHERE email=?", [email])
    .then(([results, fields]) => {
        return Promise.resolve(!(results && results.length == 0));
    })
    .catch((err) => Promise.reject(err));
}

UserModel.authenticate = (email, password) => {
    let baseSQL = "SELECT idUsers, email, firstname, lastname, password FROM GatorTrade.Users WHERE email=?;";
    return db
    .execute(baseSQL,[email])
    .then(([results, fields]) => {
        if(results && results.length == 1) {
            userId = results[0].idUsers;
            firstName = results[0].firstname;
            lastName = results[0].lastname;
            return bcrypt.compare(password, results[0].password);
        } else {
            return Promise.resolve(false);
        }
    })
    .then((passwordsMatch) => {
        if(passwordsMatch) {
            return Promise.resolve([userId, firstName, lastName]);
        } else {
            return Promise.resolve([-1]);
        }
    })
    .catch((err) => Promise.reject(err));
}

module.exports = UserModel;
