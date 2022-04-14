/**********************************************************
 * FILE: models/Posts.js
 * 
 * DESCRIPTION: 
 * 
**********************************************************/
var db = require('../db');
const PostModel = {};

PostModel.create = (title, category, description, photopath, thumbnail, price, seller, approved) => {
    let baseSQL = 'INSERT INTO GatorTrade.Items (title, category, description, photopath, thumbnail, price, seller, approved) VALUES (?,?,?,?,?,?,?,0);';
    return db
    .execute(baseSQL,[title, category, description, photopath, thumbnail, price, seller, approved])
    .then(([results, fields]) => {
        return Promise.resolve(results && results.affectedRows);
    })
    .catch((err) => Promise.reject(err));
};

module.exports = PostModel;
