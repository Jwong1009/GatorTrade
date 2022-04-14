/**********************************************************
 * FILE: models/Users.js
 * 
 * DESCRIPTION: uses mySQL users table
 * 
 * CREATED BY: Faisal
**********************************************************/
var db = require('../db');
var bcrypt = require('bcrypt');
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
    return db.execute("SELECT * FROM GatorTrade.users WHERE username=?", [username])
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
<<<<<<< HEAD

    let baseSQL = "SELECT idUsers, email, password FROM GatorTrade.users WHERE email=?;";
=======
    let baseSQL = "SELECT idUsers, email, password FROM GatorTrade.Users WHERE email=?;";
>>>>>>> e6b05b105536188bb7c8c46742cb31f15999e4ec
    return db
    .execute(baseSQL,[email])
    .then(([results, fields]) => {
        if(results && results.length == 1) {
            userId = results[0].idUsers;
            return bcrypt.compare(password, results[0].password);
        } else {
            return Promise.resolve(false);
        }
    })
    .then((passwordsMatch) => {
        if(passwordsMatch) {
            return Promise.resolve(userId);
        } else {
            return Promise.resolve(-1);
        }
    })
    .catch((err) => Promise.reject(err));
}

module.exports = UserModel;
