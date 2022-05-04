/**********************************************************
 * FILE: models/Posts.js
 * 
 * DESCRIPTION: Handles any db functionality related to Posts.
 * 
**********************************************************/
var db = require('../db');
const PostModel = {};

PostModel.create = (title, category, description, photopath, thumbnail, price, seller) => {
    let baseSQL = 'INSERT INTO GatorTrade.Items (title, category, description, photopath, thumbnail, price, seller) VALUES (?,?,?,?,?,?,?);';
    console.log("Parameters:",title, category, description, photopath, thumbnail, price, seller);
    return db
    .execute(baseSQL,[title, category, description, photopath, thumbnail, price, seller])
    .then(([results, fields]) => {
        return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = PostModel;
